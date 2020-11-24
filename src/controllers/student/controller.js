import StudentRepository from '../../service/student/studentRepositories';
import MarkRepositories from '../../service/marks/markRepositories';

class StudentController {
    constructor(){
        this.StudentRepository = new StudentRepository();
        this.MarkRepository = new MarkRepositories();
    }
    
    static instance;
    static getInstance = () => {
        if (!StudentController.instance) {

            return StudentController.instance = new StudentController();
        }
        return StudentController.instance;
    }

    create = async (req, res) => {
        const { name, email, firstRound = 0 , secondRound = 0 , thirdRound = 0} = req.body;
        console.log(req.body)
        const studentDetail = await this.StudentRepository.create({ name , email});
        const marks = await this.MarkRepository.create({ firstRound, secondRound , thirdRound });

        console.log('---------------Data----------------', { studentDetail, marks });
        res.send({ studentDetail, marks });
    }

    list = async (req, res) => {
        const { skip = 0, limit = 10 , sortBy  =  {}, ...query } = req.query;
        const options = { skip: Number(skip), limit: Number(limit), sortBy };
        const data = await this.MarkRepository.list(query, options);
        res.send(data);
    }

    update = async (req, res) => {
        const { id, dataToUpdate } = req.body;
        const data = await this.StudentRepository.update(id, dataToUpdate);
        res.send(data);
    }

    delete = async (req, res) => {
        console.log('------delete----------');
        const { id } = req.params;
        console.log(id)
        const data = await this.StudentRepository.delete(id);
        res.send(data);
    }

    get = async (req, res) => {
        const { ...data } = req.query;
        const response = await this.StudentRepository.get(data);
        res.send(response);
    }

    high=async(req,res)=>{
        const { skip = 0, limit = 10 , sortBy  =  {}, ...query } = req.query;
        const options = { skip: Number(skip), limit: Number(limit), sortBy };
        const data = await this.MarkRepository.list(query, options);
        JSON.stringify(data);
        let max=0;
        data.forEach(character => {
           
            if (character.firstRound > max) {
              if(character.secondRound>max){
                  if(character.thirdRound>max){
                      max=character.thirdRound
                  }
                  max=character.secondRound
              }
              max=character.firstRound
              res.send(max)
            }
          });
            

       
    }
    avg=async(req,res)=>{
        const { skip = 0, limit = 10 , sortBy  =  {}, ...query } = req.query;
        const options = { skip: Number(skip), limit: Number(limit), sortBy };
        const data = await this.MarkRepository.list(query, options);
        JSON.stringify(data);
        let avg=0;let count=0;
        data.forEach(character => 
            {
                character+=0;
                count++;
          });
            avg=character/count;

       
    }
    

}
export default StudentController.getInstance();