export default interface IStaticProps {
  locale: string
}

export interface IList {
  title: string;
  desc: string;
  miniTitle?: string;
  inputsList: {
    title: string;
    titleDesc?: string;
    placeholder?: string;
    disable: boolean;
    show: boolean;
  }[];
  secondBlock: {
    title: string;
    desc: string;
    show: boolean,
    miniTitle?: string;
    inputsList: {
      title: string;
      titleDesc?: string;
      placeholder: string;
      disable: boolean;
      show: boolean;
    }[];
  }
}

export interface IListValue {
  title: string;
  titleDesc?: string;
  placeholder?: string;
  disable: boolean;
  show: boolean;
}

export interface IParseStep {
  firstName?: string;
  lastName?: string;
  whatAreYourPreferredPronouns?: string;
  yourPreferredFirstName?: string;
}
