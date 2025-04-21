/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PersonCountrySpecificFieldsV2Api } from './PersonCountrySpecificFieldsV2Api';
import { NoYes } from './NoYes';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "PersonCountrySpecificFieldsV2" of service "d365_metadata".
 */
export class PersonCountrySpecificFieldsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonCountrySpecificFieldsV2Type<T>
{
  /**
   * Technical entity name for PersonCountrySpecificFieldsV2.
   */
  static override _entityName = 'PersonCountrySpecificFieldsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonCountrySpecificFieldsV2 entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Mx Employee Benefits Id.
   * @nullable
   */
  declare mxEmployeeBenefitsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Salary Factor.
   * @nullable
   */
  declare inSalaryFactor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Last Worked Paid Day.
   */
  declare frLastWorkedPaidDay: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ch Education Code.
   * @nullable
   */
  declare chEducationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Employment Contract Code.
   * @nullable
   */
  declare frEmploymentContractCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Au Tax Code.
   * @nullable
   */
  declare auTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Conventional Categorical Status.
   * @nullable
   */
  declare frConventionalCategoricalStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mx Union Id.
   * @nullable
   */
  declare mxUnionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Employee Tas Canton.
   * @nullable
   */
  declare chEmployeeTasCanton?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Spouse Live Together.
   * @nullable
   */
  declare jpSpouseLiveTogether?: NoYes | null;
  /**
   * Mx Economic Region.
   * @nullable
   */
  declare mxEconomicRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Contribute Voluntary Provident Fund.
   * @nullable
   */
  declare inContributeVoluntaryProvidentFund?: NoYes | null;
  /**
   * In Employee Provident Fund Rate.
   */
  declare inEmployeeProvidentFundRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deiban.
   */
  declare deiban: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ar Category Level.
   */
  declare arCategoryLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ch Trade Agreement.
   * @nullable
   */
  declare chTradeAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Contribute Professional Tax.
   * @nullable
   */
  declare inContributeProfessionalTax?: NoYes | null;
  /**
   * Fr Secondment Expatriate.
   * @nullable
   */
  declare frSecondmentExpatriate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Contractual Hours Code.
   * @nullable
   */
  declare frContractualHoursCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It Qualification.
   * @nullable
   */
  declare itQualification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hk Overtime Pay Type.
   * @nullable
   */
  declare hkOvertimePayType?: NoYes | null;
  /**
   * Es Social Security Group.
   */
  declare esSocialSecurityGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Jp Health Insurance Monthly Income.
   */
  declare jpHealthInsuranceMonthlyIncome: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ch Language.
   * @nullable
   */
  declare chLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Birth County.
   * @nullable
   */
  declare frBirthCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Contribute Labour Welfare.
   * @nullable
   */
  declare inContributeLabourWelfare?: NoYes | null;
  /**
   * Fr Agirc Status.
   * @nullable
   */
  declare frAgircStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freu Code.
   * @nullable
   */
  declare freuCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Fathers Husbands Name.
   * @nullable
   */
  declare inFathersHusbandsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es National Id Number.
   * @nullable
   */
  declare esNationalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Workers Compensation Insurance Date.
   */
  declare jpWorkersCompensationInsuranceDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Ch Employee Tas Religion.
   * @nullable
   */
  declare chEmployeeTasReligion?: NoYes | null;
  /**
   * Fr Professional Status.
   * @nullable
   */
  declare frProfessionalStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ieiban.
   * @nullable
   */
  declare ieiban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Employee Bvg Code.
   * @nullable
   */
  declare chEmployeeBvgCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Wage Contract Type.
   * @nullable
   */
  declare chWageContractType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debic.
   */
  declare debic: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Es Type Of Leaver Payroll.
   * @nullable
   */
  declare esTypeOfLeaverPayroll?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Number Of Children.
   */
  declare inNumberOfChildren: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Es Education Level.
   * @nullable
   */
  declare esEducationLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Workers Compensation Insurance.
   * @nullable
   */
  declare jpWorkersCompensationInsurance?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sg Ethnic Group.
   * @nullable
   */
  declare sgEthnicGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * De Occupation Number.
   */
  declare deOccupationNumber: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Es Category Level.
   * @nullable
   */
  declare esCategoryLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Terms Of Activity Code.
   * @nullable
   */
  declare frTermsOfActivityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Pension Monthly Income.
   */
  declare jpPensionMonthlyIncome: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * In Payment Currency.
   * @nullable
   */
  declare inPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Insee Code.
   * @nullable
   */
  declare frInseeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * De Additional Job.
   */
  declare deAdditionalJob: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cn Working Days.
   */
  declare cnWorkingDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sg Contribute Community Chest.
   * @nullable
   */
  declare sgContributeCommunityChest?: NoYes | null;
  /**
   * Nl Standby Employee.
   * @nullable
   */
  declare nlStandbyEmployee?: NoYes | null;
  /**
   * Lu Payslip Language.
   * @nullable
   */
  declare luPayslipLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Hazardous Work.
   * @nullable
   */
  declare arHazardousWork?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Social Works Afflliation.
   * @nullable
   */
  declare arSocialWorksAfflliation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Provident Fund Number.
   * @nullable
   */
  declare inProvidentFundNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In School Number Of Children.
   */
  declare inSchoolNumberOfChildren: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hk Salary Factor.
   */
  declare hkSalaryFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * In Location.
   * @nullable
   */
  declare inLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Overtime Paytype.
   * @nullable
   */
  declare jpOvertimePaytype?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Employee Tas City.
   * @nullable
   */
  declare chEmployeeTasCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Population Work Code.
   * @nullable
   */
  declare frPopulationWorkCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Universal Pension Number.
   * @nullable
   */
  declare jpUniversalPensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mx Workday Id.
   * @nullable
   */
  declare mxWorkdayId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Spouse Gender.
   * @nullable
   */
  declare jpSpouseGender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Termination Dispute Process.
   * @nullable
   */
  declare frTerminationDisputeProcess?: NoYes | null;
  /**
   * Es Birth Country.
   * @nullable
   */
  declare esBirthCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lu Monthly Hours.
   */
  declare luMonthlyHours: DeserializedType<T, 'Edm.Int32'>;
  /**
   * In Salary Currency.
   * @nullable
   */
  declare inSalaryCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Spouse Birth Date.
   */
  declare jpSpouseBirthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ar Vacation Days Amount.
   * @nullable
   */
  declare arVacationDaysAmount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sg Contribute Cdac.
   * @nullable
   */
  declare sgContributeCdac?: NoYes | null;
  /**
   * My Overtime Pay Type.
   * @nullable
   */
  declare myOvertimePayType?: NoYes | null;
  /**
   * Fr Birth Name.
   * @nullable
   */
  declare frBirthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Occupation Code.
   * @nullable
   */
  declare esOccupationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ie Retirement Date.
   * @nullable
   */
  declare ieRetirementDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Multiple Employers.
   * @nullable
   */
  declare frMultipleEmployers?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nl Director Share Holder.
   * @nullable
   */
  declare nlDirectorShareHolder?: NoYes | null;
  /**
   * Ch Employee Tas St Code.
   * @nullable
   */
  declare chEmployeeTasStCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Pension Reference Number.
   * @nullable
   */
  declare jpPensionReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Contract Occupation.
   * @nullable
   */
  declare esContractOccupation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inuan.
   * @nullable
   */
  declare inuan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * De Occ Name.
   */
  declare deOccName: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Jp Health Insurance Number.
   * @nullable
   */
  declare jpHealthInsuranceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Aadhaar.
   * @nullable
   */
  declare inAadhaar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mx Military Service Number.
   * @nullable
   */
  declare mxMilitaryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nl Reduction Work Time Tax.
   * @nullable
   */
  declare nlReductionWorkTimeTax?: NoYes | null;
  /**
   * Esbic.
   * @nullable
   */
  declare esbic?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mx Work Permit Number.
   * @nullable
   */
  declare mxWorkPermitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Legal Name.
   * @nullable
   */
  declare inLegalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sg Overtime Pay Type.
   * @nullable
   */
  declare sgOvertimePayType?: NoYes | null;
  /**
   * My Contribute Tax.
   * @nullable
   */
  declare myContributeTax?: NoYes | null;
  /**
   * My Working Days.
   */
  declare myWorkingDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Es Pro Rate Type.
   * @nullable
   */
  declare esProRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gbbs Reference No.
   * @nullable
   */
  declare gbbsReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * My Contribute Epf.
   * @nullable
   */
  declare myContributeEpf?: NoYes | null;
  /**
   * Ar National Id.
   * @nullable
   */
  declare arNationalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Collective Agreement Code.
   * @nullable
   */
  declare esCollectiveAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Category Level Start Date.
   */
  declare arCategoryLevelStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nl Leaver Sick On Last Day.
   * @nullable
   */
  declare nlLeaverSickOnLastDay?: NoYes | null;
  /**
   * Ar Schedule.
   * @nullable
   */
  declare arSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sg Contribute Sdl.
   * @nullable
   */
  declare sgContributeSdl?: NoYes | null;
  /**
   * It Legal Address Fiscal Code 0101.
   * @nullable
   */
  declare itLegalAddressFiscalCode0101?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Au Work State.
   * @nullable
   */
  declare auWorkState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Employment Insurance Issue Date.
   */
  declare jpEmploymentInsuranceIssueDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Ch Work City.
   * @nullable
   */
  declare chWorkCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Tax Category.
   * @nullable
   */
  declare jpTaxCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Pension No.
   * @nullable
   */
  declare inPensionNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Contribute Labour Welfare Fund.
   * @nullable
   */
  declare inContributeLabourWelfareFund?: NoYes | null;
  /**
   * Arafjp.
   * @nullable
   */
  declare arafjp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Working Days Code.
   * @nullable
   */
  declare inWorkingDaysCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Work Day Id.
   * @nullable
   */
  declare arWorkDayId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gbni Letter.
   * @nullable
   */
  declare gbniLetter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Contribute Provident Fund.
   * @nullable
   */
  declare inContributeProvidentFund?: NoYes | null;
  /**
   * Sg Contribute Sinda.
   * @nullable
   */
  declare sgContributeSinda?: NoYes | null;
  /**
   * Lubic.
   * @nullable
   */
  declare lubic?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Secondary National Identifier.
   * @nullable
   */
  declare inSecondaryNationalIdentifier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ar Vacation Start Date.
   */
  declare arVacationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nl Family Of Owner.
   * @nullable
   */
  declare nlFamilyOfOwner?: NoYes | null;
  /**
   * Ar Vacation Type.
   * @nullable
   */
  declare arVacationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Type Of Notice Period.
   * @nullable
   */
  declare frTypeOfNoticePeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It Birth Place.
   * @nullable
   */
  declare itBirthPlace?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Employment Insurance Number.
   * @nullable
   */
  declare jpEmploymentInsuranceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fr Collective Agreement Code.
   * @nullable
   */
  declare frCollectiveAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It Legal Address City 0101.
   * @nullable
   */
  declare itLegalAddressCity0101?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Work State.
   * @nullable
   */
  declare chWorkState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Type Of Starter Payroll.
   * @nullable
   */
  declare esTypeOfStarterPayroll?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nl Gross Net.
   * @nullable
   */
  declare nlGrossNet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hk Contribute Mpf.
   * @nullable
   */
  declare hkContributeMpf?: NoYes | null;
  /**
   * Es Contract End Holidays.
   */
  declare esContractEndHolidays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * In Employer Provident Fund Rate.
   */
  declare inEmployerProvidentFundRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inot Entitlement.
   * @nullable
   */
  declare inotEntitlement?: NoYes | null;
  /**
   * Jp Spouse Surname.
   * @nullable
   */
  declare jpSpouseSurname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Union Agreements.
   * @nullable
   */
  declare arUnionAgreements?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Tax Exempt.
   * @nullable
   */
  declare arTaxExempt?: NoYes | null;
  /**
   * Es Profession Code.
   * @nullable
   */
  declare esProfessionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Company Contribution Code.
   */
  declare esCompanyContributionCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sg Contribute Ecf.
   * @nullable
   */
  declare sgContributeEcf?: NoYes | null;
  /**
   * Es National Id Type.
   * @nullable
   */
  declare esNationalIdType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Employee Tas Tax Code.
   * @nullable
   */
  declare chEmployeeTasTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Pension Issue Date.
   */
  declare jpPensionIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mx Shift Id.
   * @nullable
   */
  declare mxShiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It Legal Address Region Province 0101.
   * @nullable
   */
  declare itLegalAddressRegionProvince0101?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ar Union Agreement Reference.
   * @nullable
   */
  declare arUnionAgreementReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sg Contribute Cpf.
   * @nullable
   */
  declare sgContributeCpf?: NoYes | null;
  /**
   * Sg Contribute Mbmf.
   * @nullable
   */
  declare sgContributeMbmf?: NoYes | null;
  /**
   * My Contribute Socso.
   * @nullable
   */
  declare myContributeSocso?: NoYes | null;
  /**
   * It Birth Place Region Province.
   * @nullable
   */
  declare itBirthPlaceRegionProvince?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Employee Alv Code.
   * @nullable
   */
  declare chEmployeeAlvCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inpan.
   */
  declare inpan: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ch Employee Ahv Code.
   * @nullable
   */
  declare chEmployeeAhvCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Apprentice Trainee.
   * @nullable
   */
  declare chApprenticeTrainee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Contract Start Date.
   */
  declare esContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Jp Health Insurance Issue Date.
   */
  declare jpHealthInsuranceIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ar Other Documents.
   * @nullable
   */
  declare arOtherDocuments?: NoYes | null;
  /**
   * Sg Legal Name.
   * @nullable
   */
  declare sgLegalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hk Payment Currency.
   * @nullable
   */
  declare hkPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mx Tax Number.
   * @nullable
   */
  declare mxTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Contribute Income Tax.
   * @nullable
   */
  declare inContributeIncomeTax?: NoYes | null;
  /**
   * Mx National Id Number.
   * @nullable
   */
  declare mxNationalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gb Sort Code.
   * @nullable
   */
  declare gbSortCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fr Terms Of Work Period Code.
   * @nullable
   */
  declare frTermsOfWorkPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Resignation Date.
   */
  declare inResignationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ch Employee Suva Code.
   * @nullable
   */
  declare chEmployeeSuvaCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Professional Position.
   * @nullable
   */
  declare chProfessionalPosition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iebic.
   * @nullable
   */
  declare iebic?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Vacation Days Type.
   * @nullable
   */
  declare arVacationDaysType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ch Employee Ktg Code.
   * @nullable
   */
  declare chEmployeeKtgCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cn Tax City.
   * @nullable
   */
  declare cnTaxCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ieprsi Class.
   * @nullable
   */
  declare ieprsiClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Luiban.
   * @nullable
   */
  declare luiban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inpf Limit.
   */
  declare inpfLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lu Birth Name.
   * @nullable
   */
  declare luBirthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Working Days Per Week.
   */
  declare inWorkingDaysPerWeek: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * In Ethnic Group.
   * @nullable
   */
  declare inEthnicGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * It Level.
   * @nullable
   */
  declare itLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cn Overtime Paytype.
   * @nullable
   */
  declare cnOvertimePaytype?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Contribute Esi.
   * @nullable
   */
  declare inContributeEsi?: NoYes | null;
  /**
   * In Voluntary Provident Fund Rate.
   */
  declare inVoluntaryProvidentFundRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ch Foreigner Category.
   * @nullable
   */
  declare chForeignerCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jp Spouse First Name.
   * @nullable
   */
  declare jpSpouseFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Es Payment Calendar Type.
   */
  declare esPaymentCalendarType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * In Work State.
   * @nullable
   */
  declare inWorkState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nl Previous Owner.
   * @nullable
   */
  declare nlPreviousOwner?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;

  constructor(_entityApi: PersonCountrySpecificFieldsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PersonCountrySpecificFieldsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  mxEmployeeBenefitsId?: DeserializedType<T, 'Edm.String'> | null;
  inSalaryFactor?: DeserializedType<T, 'Edm.String'> | null;
  frLastWorkedPaidDay: DeserializedType<T, 'Edm.DateTimeOffset'>;
  chEducationCode?: DeserializedType<T, 'Edm.String'> | null;
  frEmploymentContractCode?: DeserializedType<T, 'Edm.String'> | null;
  auTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  frConventionalCategoricalStatus?: DeserializedType<T, 'Edm.String'> | null;
  mxUnionId?: DeserializedType<T, 'Edm.String'> | null;
  chEmployeeTasCanton?: DeserializedType<T, 'Edm.String'> | null;
  jpSpouseLiveTogether?: NoYes | null;
  mxEconomicRegion?: DeserializedType<T, 'Edm.String'> | null;
  inContributeVoluntaryProvidentFund?: NoYes | null;
  inEmployeeProvidentFundRate: DeserializedType<T, 'Edm.Decimal'>;
  deiban: DeserializedType<T, 'Edm.DateTimeOffset'>;
  arCategoryLevel: DeserializedType<T, 'Edm.Int32'>;
  chTradeAgreement?: DeserializedType<T, 'Edm.String'> | null;
  inContributeProfessionalTax?: NoYes | null;
  frSecondmentExpatriate?: DeserializedType<T, 'Edm.String'> | null;
  frContractualHoursCode?: DeserializedType<T, 'Edm.String'> | null;
  itQualification?: DeserializedType<T, 'Edm.String'> | null;
  hkOvertimePayType?: NoYes | null;
  esSocialSecurityGroup: DeserializedType<T, 'Edm.Int32'>;
  jpHealthInsuranceMonthlyIncome: DeserializedType<T, 'Edm.Decimal'>;
  chLanguage?: DeserializedType<T, 'Edm.String'> | null;
  frBirthCounty?: DeserializedType<T, 'Edm.String'> | null;
  inContributeLabourWelfare?: NoYes | null;
  frAgircStatus?: DeserializedType<T, 'Edm.String'> | null;
  freuCode?: DeserializedType<T, 'Edm.String'> | null;
  inFathersHusbandsName?: DeserializedType<T, 'Edm.String'> | null;
  esNationalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  jpWorkersCompensationInsuranceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  chEmployeeTasReligion?: NoYes | null;
  frProfessionalStatus?: DeserializedType<T, 'Edm.String'> | null;
  ieiban?: DeserializedType<T, 'Edm.String'> | null;
  chEmployeeBvgCode?: DeserializedType<T, 'Edm.String'> | null;
  chWageContractType?: DeserializedType<T, 'Edm.String'> | null;
  debic: DeserializedType<T, 'Edm.DateTimeOffset'>;
  esTypeOfLeaverPayroll?: DeserializedType<T, 'Edm.String'> | null;
  inNumberOfChildren: DeserializedType<T, 'Edm.Int32'>;
  esEducationLevel?: DeserializedType<T, 'Edm.String'> | null;
  jpWorkersCompensationInsurance?: DeserializedType<T, 'Edm.String'> | null;
  sgEthnicGroup?: DeserializedType<T, 'Edm.String'> | null;
  deOccupationNumber: DeserializedType<T, 'Edm.DateTimeOffset'>;
  esCategoryLevel?: DeserializedType<T, 'Edm.String'> | null;
  frTermsOfActivityCode?: DeserializedType<T, 'Edm.String'> | null;
  jpPensionMonthlyIncome: DeserializedType<T, 'Edm.Decimal'>;
  inPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  frInseeCode?: DeserializedType<T, 'Edm.String'> | null;
  deAdditionalJob: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cnWorkingDays: DeserializedType<T, 'Edm.Decimal'>;
  sgContributeCommunityChest?: NoYes | null;
  nlStandbyEmployee?: NoYes | null;
  luPayslipLanguage?: DeserializedType<T, 'Edm.String'> | null;
  arHazardousWork?: DeserializedType<T, 'Edm.String'> | null;
  arSocialWorksAfflliation?: DeserializedType<T, 'Edm.String'> | null;
  inProvidentFundNumber?: DeserializedType<T, 'Edm.String'> | null;
  inSchoolNumberOfChildren: DeserializedType<T, 'Edm.Int32'>;
  hkSalaryFactor: DeserializedType<T, 'Edm.Decimal'>;
  inLocation?: DeserializedType<T, 'Edm.String'> | null;
  jpOvertimePaytype?: DeserializedType<T, 'Edm.String'> | null;
  chEmployeeTasCity?: DeserializedType<T, 'Edm.String'> | null;
  frPopulationWorkCode?: DeserializedType<T, 'Edm.String'> | null;
  jpUniversalPensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  mxWorkdayId?: DeserializedType<T, 'Edm.String'> | null;
  jpSpouseGender?: DeserializedType<T, 'Edm.String'> | null;
  frTerminationDisputeProcess?: NoYes | null;
  esBirthCountry?: DeserializedType<T, 'Edm.String'> | null;
  luMonthlyHours: DeserializedType<T, 'Edm.Int32'>;
  inSalaryCurrency?: DeserializedType<T, 'Edm.String'> | null;
  jpSpouseBirthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  arVacationDaysAmount?: DeserializedType<T, 'Edm.String'> | null;
  sgContributeCdac?: NoYes | null;
  myOvertimePayType?: NoYes | null;
  frBirthName?: DeserializedType<T, 'Edm.String'> | null;
  esOccupationCode?: DeserializedType<T, 'Edm.String'> | null;
  ieRetirementDate?: DeserializedType<T, 'Edm.String'> | null;
  frMultipleEmployers?: DeserializedType<T, 'Edm.String'> | null;
  nlDirectorShareHolder?: NoYes | null;
  chEmployeeTasStCode?: DeserializedType<T, 'Edm.String'> | null;
  jpPensionReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  esContractOccupation?: DeserializedType<T, 'Edm.String'> | null;
  inuan?: DeserializedType<T, 'Edm.String'> | null;
  deOccName: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jpHealthInsuranceNumber?: DeserializedType<T, 'Edm.String'> | null;
  inAadhaar?: DeserializedType<T, 'Edm.String'> | null;
  mxMilitaryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  nlReductionWorkTimeTax?: NoYes | null;
  esbic?: DeserializedType<T, 'Edm.String'> | null;
  mxWorkPermitNumber?: DeserializedType<T, 'Edm.String'> | null;
  inLegalName?: DeserializedType<T, 'Edm.String'> | null;
  sgOvertimePayType?: NoYes | null;
  myContributeTax?: NoYes | null;
  myWorkingDays: DeserializedType<T, 'Edm.Decimal'>;
  esProRateType?: DeserializedType<T, 'Edm.String'> | null;
  gbbsReferenceNo?: DeserializedType<T, 'Edm.String'> | null;
  myContributeEpf?: NoYes | null;
  arNationalId?: DeserializedType<T, 'Edm.String'> | null;
  esCollectiveAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  arCategoryLevelStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nlLeaverSickOnLastDay?: NoYes | null;
  arSchedule?: DeserializedType<T, 'Edm.String'> | null;
  sgContributeSdl?: NoYes | null;
  itLegalAddressFiscalCode0101?: DeserializedType<T, 'Edm.String'> | null;
  auWorkState?: DeserializedType<T, 'Edm.String'> | null;
  jpEmploymentInsuranceIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  chWorkCity?: DeserializedType<T, 'Edm.String'> | null;
  jpTaxCategory?: DeserializedType<T, 'Edm.String'> | null;
  inPensionNo?: DeserializedType<T, 'Edm.String'> | null;
  inContributeLabourWelfareFund?: NoYes | null;
  arafjp?: DeserializedType<T, 'Edm.String'> | null;
  inWorkingDaysCode?: DeserializedType<T, 'Edm.String'> | null;
  arWorkDayId?: DeserializedType<T, 'Edm.String'> | null;
  gbniLetter?: DeserializedType<T, 'Edm.String'> | null;
  inContributeProvidentFund?: NoYes | null;
  sgContributeSinda?: NoYes | null;
  lubic?: DeserializedType<T, 'Edm.String'> | null;
  inSecondaryNationalIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  arVacationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nlFamilyOfOwner?: NoYes | null;
  arVacationType?: DeserializedType<T, 'Edm.String'> | null;
  frTypeOfNoticePeriod?: DeserializedType<T, 'Edm.String'> | null;
  itBirthPlace?: DeserializedType<T, 'Edm.String'> | null;
  jpEmploymentInsuranceNumber?: DeserializedType<T, 'Edm.String'> | null;
  frCollectiveAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  itLegalAddressCity0101?: DeserializedType<T, 'Edm.String'> | null;
  chWorkState?: DeserializedType<T, 'Edm.String'> | null;
  esTypeOfStarterPayroll?: DeserializedType<T, 'Edm.String'> | null;
  nlGrossNet?: DeserializedType<T, 'Edm.String'> | null;
  hkContributeMpf?: NoYes | null;
  esContractEndHolidays: DeserializedType<T, 'Edm.Decimal'>;
  inEmployerProvidentFundRate: DeserializedType<T, 'Edm.Decimal'>;
  inotEntitlement?: NoYes | null;
  jpSpouseSurname?: DeserializedType<T, 'Edm.String'> | null;
  arUnionAgreements?: DeserializedType<T, 'Edm.String'> | null;
  arTaxExempt?: NoYes | null;
  esProfessionCode?: DeserializedType<T, 'Edm.String'> | null;
  esCompanyContributionCode: DeserializedType<T, 'Edm.Int32'>;
  sgContributeEcf?: NoYes | null;
  esNationalIdType?: DeserializedType<T, 'Edm.String'> | null;
  chEmployeeTasTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  jpPensionIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mxShiftId?: DeserializedType<T, 'Edm.String'> | null;
  itLegalAddressRegionProvince0101?: DeserializedType<T, 'Edm.String'> | null;
  arUnionAgreementReference?: DeserializedType<T, 'Edm.String'> | null;
  sgContributeCpf?: NoYes | null;
  sgContributeMbmf?: NoYes | null;
  myContributeSocso?: NoYes | null;
  itBirthPlaceRegionProvince?: DeserializedType<T, 'Edm.String'> | null;
  chEmployeeAlvCode?: DeserializedType<T, 'Edm.String'> | null;
  inpan: DeserializedType<T, 'Edm.Int32'>;
  chEmployeeAhvCode?: DeserializedType<T, 'Edm.String'> | null;
  chApprenticeTrainee?: DeserializedType<T, 'Edm.String'> | null;
  esContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jpHealthInsuranceIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  arOtherDocuments?: NoYes | null;
  sgLegalName?: DeserializedType<T, 'Edm.String'> | null;
  hkPaymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  mxTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  inContributeIncomeTax?: NoYes | null;
  mxNationalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  gbSortCode?: DeserializedType<T, 'Edm.String'> | null;
  frTermsOfWorkPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  inResignationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  chEmployeeSuvaCode?: DeserializedType<T, 'Edm.String'> | null;
  chProfessionalPosition?: DeserializedType<T, 'Edm.String'> | null;
  iebic?: DeserializedType<T, 'Edm.String'> | null;
  arVacationDaysType?: DeserializedType<T, 'Edm.String'> | null;
  chEmployeeKtgCode?: DeserializedType<T, 'Edm.String'> | null;
  cnTaxCity?: DeserializedType<T, 'Edm.String'> | null;
  ieprsiClass?: DeserializedType<T, 'Edm.String'> | null;
  luiban?: DeserializedType<T, 'Edm.String'> | null;
  inpfLimit: DeserializedType<T, 'Edm.Decimal'>;
  luBirthName?: DeserializedType<T, 'Edm.String'> | null;
  inWorkingDaysPerWeek: DeserializedType<T, 'Edm.Decimal'>;
  inEthnicGroup?: DeserializedType<T, 'Edm.String'> | null;
  itLevel?: DeserializedType<T, 'Edm.String'> | null;
  cnOvertimePaytype?: DeserializedType<T, 'Edm.String'> | null;
  inContributeEsi?: NoYes | null;
  inVoluntaryProvidentFundRate: DeserializedType<T, 'Edm.Decimal'>;
  chForeignerCategory?: DeserializedType<T, 'Edm.String'> | null;
  jpSpouseFirstName?: DeserializedType<T, 'Edm.String'> | null;
  esPaymentCalendarType: DeserializedType<T, 'Edm.Int32'>;
  inWorkState?: DeserializedType<T, 'Edm.String'> | null;
  nlPreviousOwner?: NoYes | null;
  person?: PeopleType<T> | null;
}
