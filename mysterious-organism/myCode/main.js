// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Pila Aequer factory function
  const pAequorFactory = (num, dna) => {
    return {
      specimenNum: num,
      dna: dna,
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
      },
      compareDNA(otherOrg) {
        const similarities = this.dna.reduce((acc, curr, idx, arr) => {
          if (arr[idx] === otherOrg.dna[idx]) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
        const percentOfDNAshared = (similarities / this.dna.length) * 100;
        const percentageTo2Deci = percentOfDNAshared.toFixed(2);
        console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${percentageTo2Deci}% DNA in common.`);
      },
      willLikelySurvive() {
          const CorG = this.dna.filter(base => base == 'C' || base == 'G');
          return CorG.length / this.dna.length >= 0.6;
          }
        }
    }
  
  
  
  
  
  // Console logs
  // console.log(returnRandBase());
  // console.log(mockUpStrand());
  // console.log(pAequorFactory(1, mockUpStrand()));
    let pA1 = pAequorFactory(1, mockUpStrand());
//   let pA2 = pAequorFactory(2, mockUpStrand())
//   // console.log(pA1.dna);
//   // console.log(pA1.mutate());
//   console.log(pA1.compareDNA(pA2));
    console.log(pA1.willLikelySurvive());