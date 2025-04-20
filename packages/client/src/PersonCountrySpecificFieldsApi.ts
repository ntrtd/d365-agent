/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonCountrySpecificFields } from './PersonCountrySpecificFields';
import { PersonCountrySpecificFieldsRequestBuilder } from './PersonCountrySpecificFieldsRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonCountrySpecificFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PersonCountrySpecificFields<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PersonCountrySpecificFieldsApi<DeSerializersT> {
    return new PersonCountrySpecificFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonCountrySpecificFields<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [PeopleApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PersonCountrySpecificFields;

  requestBuilder(): PersonCountrySpecificFieldsRequestBuilder<DeSerializersT> {
    return new PersonCountrySpecificFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonCountrySpecificFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PersonCountrySpecificFields<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonCountrySpecificFields<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PersonCountrySpecificFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonCountrySpecificFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MX_EMPLOYEE_BENEFITS_ID: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_SALARY_FACTOR: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_LAST_WORKED_PAID_DAY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CH_EDUCATION_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_EMPLOYMENT_CONTRACT_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AU_TAX_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_CONVENTIONAL_CATEGORICAL_STATUS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SG_ACCOUNT_HOLDER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MX_UNION_ID: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_EMPLOYEE_TAS_CANTON: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_SPOUSE_LIVE_TOGETHER: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MX_ECONOMIC_REGION: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_CONTRIBUTE_VOLUNTARY_PROVIDENT_FUND: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_EMPLOYEE_PROVIDENT_FUND_RATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEIBAN: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AR_CATEGORY_LEVEL: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CH_TRADE_AGREEMENT: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_CONTRIBUTE_PROFESSIONAL_TAX: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FR_SECONDMENT_EXPATRIATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_CONTRACTUAL_HOURS_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IT_QUALIFICATION: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HK_OVERTIME_PAY_TYPE: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ES_SOCIAL_SECURITY_GROUP: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JP_HEALTH_INSURANCE_MONTHLY_INCOME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CH_LANGUAGE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_BIRTH_COUNTY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_CONTRIBUTE_LABOUR_WELFARE: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FR_AGIRC_STATUS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREU_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_FATHERS_HUSBANDS_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_NATIONAL_ID_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_WORKERS_COMPENSATION_INSURANCE_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MX_COST_CENTRE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_EMPLOYEE_TAS_RELIGION: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FR_PROFESSIONAL_STATUS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IEIBAN: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_EMPLOYEE_BVG_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_WAGE_CONTRACT_TYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIC: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ES_TYPE_OF_LEAVER_PAYROLL: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_NUMBER_OF_CHILDREN: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ES_EDUCATION_LEVEL: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_WORKERS_COMPENSATION_INSURANCE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SG_ETHNIC_GROUP: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DE_OCCUPATION_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ES_CATEGORY_LEVEL: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_TERMS_OF_ACTIVITY_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_PENSION_MONTHLY_INCOME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IN_PAYMENT_CURRENCY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_INSEE_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DE_ADDITIONAL_JOB: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CN_WORKING_DAYS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SG_CONTRIBUTE_COMMUNITY_CHEST: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NL_STANDBY_EMPLOYEE: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LU_PAYSLIP_LANGUAGE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_HAZARDOUS_WORK: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_SOCIAL_WORKS_AFFLLIATION: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_PROVIDENT_FUND_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HK_ACCOUNT_HOLDER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_SCHOOL_NUMBER_OF_CHILDREN: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HK_SALARY_FACTOR: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IN_LOCATION: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_OVERTIME_PAYTYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_EMPLOYEE_TAS_CITY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_POPULATION_WORK_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_UNIVERSAL_PENSION_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MX_WORKDAY_ID: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MY_PAYMENT_METHOD: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_SPOUSE_GENDER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_TERMINATION_DISPUTE_PROCESS: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ES_BIRTH_COUNTRY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LU_MONTHLY_HOURS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IN_SALARY_CURRENCY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_SPOUSE_BIRTH_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AR_VACATION_DAYS_AMOUNT: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SG_CONTRIBUTE_CDAC: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MY_OVERTIME_PAY_TYPE: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AU_BANK_LOCATION_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_BIRTH_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_OCCUPATION_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IE_RETIREMENT_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_MULTIPLE_EMPLOYERS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NL_DIRECTOR_SHARE_HOLDER: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CH_EMPLOYEE_TAS_ST_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_PENSION_REFERENCE_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_CONTRACT_OCCUPATION: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INUAN: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DE_OCC_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JP_HEALTH_INSURANCE_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_AADHAAR: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MX_MILITARY_SERVICE_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NL_REDUCTION_WORK_TIME_TAX: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESBIC: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MX_WORK_PERMIT_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_LEGAL_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SG_OVERTIME_PAY_TYPE: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MY_CONTRIBUTE_TAX: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MY_WORKING_DAYS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ES_PRO_RATE_TYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GBBS_REFERENCE_NO: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MY_CONTRIBUTE_EPF: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AR_NATIONAL_ID: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_COLLECTIVE_AGREEMENT_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_CATEGORY_LEVEL_START_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NL_LEAVER_SICK_ON_LAST_DAY: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AR_SCHEDULE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SG_CONTRIBUTE_SDL: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IT_LEGAL_ADDRESS_FISCAL_CODE_0101: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AU_WORK_STATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_EMPLOYMENT_INSURANCE_ISSUE_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CH_WORK_CITY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_TAX_CATEGORY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_PENSION_NO: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_CONTRIBUTE_LABOUR_WELFARE_FUND: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARAFJP: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MY_ACCOUNT_HOLDER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CN_ACCOUNT_HOLDER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_WORKING_DAYS_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_WORK_DAY_ID: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GBNI_LETTER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_CONTRIBUTE_PROVIDENT_FUND: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SG_CONTRIBUTE_SINDA: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LUBIC: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_SECONDARY_NATIONAL_IDENTIFIER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_BANK_BRANCH_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_VACATION_START_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NL_FAMILY_OF_OWNER: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AR_VACATION_TYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_TYPE_OF_NOTICE_PERIOD: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IT_BIRTH_PLACE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_EMPLOYMENT_INSURANCE_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_COLLECTIVE_AGREEMENT_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IT_LEGAL_ADDRESS_CITY_0101: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_WORK_STATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_TYPE_OF_STARTER_PAYROLL: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NL_GROSS_NET: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HK_CONTRIBUTE_MPF: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ES_CONTRACT_END_HOLIDAYS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IN_EMPLOYER_PROVIDENT_FUND_RATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INOT_ENTITLEMENT: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JP_SPOUSE_SURNAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_UNION_AGREEMENTS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_TAX_EXEMPT: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ES_PROFESSION_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_COMPANY_CONTRIBUTION_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SG_CONTRIBUTE_ECF: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ES_NATIONAL_ID_TYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_EMPLOYEE_TAS_TAX_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_PENSION_ISSUE_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MX_SHIFT_ID: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IT_LEGAL_ADDRESS_REGION_PROVINCE_0101: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_UNION_AGREEMENT_REFERENCE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SG_CONTRIBUTE_CPF: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SG_CONTRIBUTE_MBMF: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MY_CONTRIBUTE_SOCSO: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IT_BIRTH_PLACE_REGION_PROVINCE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_EMPLOYEE_ALV_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_ACCOUNT_HOLDER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INPAN: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CH_EMPLOYEE_AHV_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_APPRENTICE_TRAINEE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_CONTRACT_START_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JP_HEALTH_INSURANCE_ISSUE_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AR_OTHER_DOCUMENTS: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SG_LEGAL_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HK_PAYMENT_CURRENCY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MX_TAX_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_CONTRIBUTE_INCOME_TAX: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JP_BANK_LOCATION_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MX_NATIONAL_ID_NUMBER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GB_SORT_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FR_TERMS_OF_WORK_PERIOD_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_RESIGNATION_DATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CH_EMPLOYEE_SUVA_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_PROFESSIONAL_POSITION: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IEBIC: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_VACATION_DAYS_TYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CH_EMPLOYEE_KTG_CODE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CN_TAX_CITY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IEPRSI_CLASS: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LUIBAN: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INPF_LIMIT: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LU_BIRTH_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_WORKING_DAYS_PER_WEEK: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IN_ETHNIC_GROUP: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IT_LEVEL: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CN_OVERTIME_PAYTYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_CONTRIBUTE_ESI: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_VOLUNTARY_PROVIDENT_FUND_RATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CH_FOREIGNER_CATEGORY: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JP_SPOUSE_FIRST_NAME: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_PAYMENT_CALENDAR_TYPE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IE_ACCOUNT_HOLDER: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_WORK_STATE: OrderableEdmTypeField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NL_PREVIOUS_OWNER: EnumField<
      PersonCountrySpecificFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonCountrySpecificFields<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonCountrySpecificFields<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mxEmployeeBenefitsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_EMPLOYEE_BENEFITS_ID: fieldBuilder.buildEdmTypeField(
          'MXEmployeeBenefitsID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inSalaryFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_SALARY_FACTOR: fieldBuilder.buildEdmTypeField(
          'INSalaryFactor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frLastWorkedPaidDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_LAST_WORKED_PAID_DAY: fieldBuilder.buildEdmTypeField(
          'FRLastWorkedPaidDay',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link chEducationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EDUCATION_CODE: fieldBuilder.buildEdmTypeField(
          'CHEducationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frEmploymentContractCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_EMPLOYMENT_CONTRACT_CODE: fieldBuilder.buildEdmTypeField(
          'FREmploymentContractCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link auTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AU_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'AUTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frConventionalCategoricalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_CONVENTIONAL_CATEGORICAL_STATUS: fieldBuilder.buildEdmTypeField(
          'FRConventionalCategoricalStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sgAccountHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_ACCOUNT_HOLDER: fieldBuilder.buildEdmTypeField(
          'SGAccountHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mxUnionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_UNION_ID: fieldBuilder.buildEdmTypeField(
          'MXUnionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chEmployeeTasCanton} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_TAS_CANTON: fieldBuilder.buildEdmTypeField(
          'CHEmployeeTASCanton',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpSpouseLiveTogether} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_SPOUSE_LIVE_TOGETHER: fieldBuilder.buildEnumField(
          'JPSpouseLiveTogether',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mxEconomicRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_ECONOMIC_REGION: fieldBuilder.buildEdmTypeField(
          'MXEconomicRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inContributeVoluntaryProvidentFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_CONTRIBUTE_VOLUNTARY_PROVIDENT_FUND: fieldBuilder.buildEnumField(
          'INContributeVoluntaryProvidentFund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inEmployeeProvidentFundRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_EMPLOYEE_PROVIDENT_FUND_RATE: fieldBuilder.buildEdmTypeField(
          'INEmployeeProvidentFundRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deiban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEIBAN: fieldBuilder.buildEdmTypeField(
          'DEIBAN',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link arCategoryLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_CATEGORY_LEVEL: fieldBuilder.buildEdmTypeField(
          'ARCategoryLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link chTradeAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_TRADE_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'CHTradeAgreement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inContributeProfessionalTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_CONTRIBUTE_PROFESSIONAL_TAX: fieldBuilder.buildEnumField(
          'INContributeProfessionalTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link frSecondmentExpatriate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_SECONDMENT_EXPATRIATE: fieldBuilder.buildEdmTypeField(
          'FRSecondmentExpatriate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frContractualHoursCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_CONTRACTUAL_HOURS_CODE: fieldBuilder.buildEdmTypeField(
          'FRContractualHoursCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itQualification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_QUALIFICATION: fieldBuilder.buildEdmTypeField(
          'ITQualification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hkOvertimePayType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HK_OVERTIME_PAY_TYPE: fieldBuilder.buildEnumField(
          'HKOvertimePayType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link esSocialSecurityGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_SOCIAL_SECURITY_GROUP: fieldBuilder.buildEdmTypeField(
          'ESSocialSecurityGroup',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link jpHealthInsuranceMonthlyIncome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_HEALTH_INSURANCE_MONTHLY_INCOME: fieldBuilder.buildEdmTypeField(
          'JPHealthInsuranceMonthlyIncome',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link chLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'CHLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frBirthCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_BIRTH_COUNTY: fieldBuilder.buildEdmTypeField(
          'FRBirthCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inContributeLabourWelfare} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_CONTRIBUTE_LABOUR_WELFARE: fieldBuilder.buildEnumField(
          'INContributeLabourWelfare',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link frAgircStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_AGIRC_STATUS: fieldBuilder.buildEdmTypeField(
          'FRAgircStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freuCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREU_CODE: fieldBuilder.buildEdmTypeField(
          'FREUCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inFathersHusbandsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_FATHERS_HUSBANDS_NAME: fieldBuilder.buildEdmTypeField(
          'INFathersHusbandsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esNationalIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_NATIONAL_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'ESNationalIDNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpWorkersCompensationInsuranceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_WORKERS_COMPENSATION_INSURANCE_DATE: fieldBuilder.buildEdmTypeField(
          'JPWorkersCompensationInsuranceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mxCostCentre} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_COST_CENTRE: fieldBuilder.buildEdmTypeField(
          'MXCostCentre',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chEmployeeTasReligion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_TAS_RELIGION: fieldBuilder.buildEnumField(
          'CHEmployeeTASReligion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link frProfessionalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_PROFESSIONAL_STATUS: fieldBuilder.buildEdmTypeField(
          'FRProfessionalStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ieiban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IEIBAN: fieldBuilder.buildEdmTypeField('IEIBAN', 'Edm.String', true),
        /**
         * Static representation of the {@link chEmployeeBvgCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_BVG_CODE: fieldBuilder.buildEdmTypeField(
          'CHEmployeeBVGCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chWageContractType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_WAGE_CONTRACT_TYPE: fieldBuilder.buildEdmTypeField(
          'CHWageContractType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link debic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIC: fieldBuilder.buildEdmTypeField(
          'DEBIC',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link esTypeOfLeaverPayroll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_TYPE_OF_LEAVER_PAYROLL: fieldBuilder.buildEdmTypeField(
          'ESTypeOfLeaverPayroll',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inNumberOfChildren} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_NUMBER_OF_CHILDREN: fieldBuilder.buildEdmTypeField(
          'INNumberOfChildren',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link esEducationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_EDUCATION_LEVEL: fieldBuilder.buildEdmTypeField(
          'ESEducationLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpWorkersCompensationInsurance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_WORKERS_COMPENSATION_INSURANCE: fieldBuilder.buildEdmTypeField(
          'JPWorkersCompensationInsurance',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sgEthnicGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_ETHNIC_GROUP: fieldBuilder.buildEdmTypeField(
          'SGEthnicGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deOccupationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DE_OCCUPATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'DEOccupationNumber',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link esCategoryLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_CATEGORY_LEVEL: fieldBuilder.buildEdmTypeField(
          'ESCategoryLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frTermsOfActivityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_TERMS_OF_ACTIVITY_CODE: fieldBuilder.buildEdmTypeField(
          'FRTermsOfActivityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpPensionMonthlyIncome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_PENSION_MONTHLY_INCOME: fieldBuilder.buildEdmTypeField(
          'JPPensionMonthlyIncome',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inPaymentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_PAYMENT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'INPaymentCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frInseeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_INSEE_CODE: fieldBuilder.buildEdmTypeField(
          'FRInseeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deAdditionalJob} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DE_ADDITIONAL_JOB: fieldBuilder.buildEdmTypeField(
          'DEAdditionalJob',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cnWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CN_WORKING_DAYS: fieldBuilder.buildEdmTypeField(
          'CNWorkingDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sgContributeCommunityChest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_CONTRIBUTE_COMMUNITY_CHEST: fieldBuilder.buildEnumField(
          'SGContributeCommunityChest',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nlStandbyEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NL_STANDBY_EMPLOYEE: fieldBuilder.buildEnumField(
          'NLStandbyEmployee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link luPayslipLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LU_PAYSLIP_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'LUPayslipLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arHazardousWork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_HAZARDOUS_WORK: fieldBuilder.buildEdmTypeField(
          'ARHazardousWork',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arSocialWorksAfflliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_SOCIAL_WORKS_AFFLLIATION: fieldBuilder.buildEdmTypeField(
          'ARSocialWorksAfflliation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inProvidentFundNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_PROVIDENT_FUND_NUMBER: fieldBuilder.buildEdmTypeField(
          'INProvidentFundNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hkAccountHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HK_ACCOUNT_HOLDER: fieldBuilder.buildEdmTypeField(
          'HKAccountHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inSchoolNumberOfChildren} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_SCHOOL_NUMBER_OF_CHILDREN: fieldBuilder.buildEdmTypeField(
          'INSchoolNumberOfChildren',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link hkSalaryFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HK_SALARY_FACTOR: fieldBuilder.buildEdmTypeField(
          'HKSalaryFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_LOCATION: fieldBuilder.buildEdmTypeField(
          'INLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpOvertimePaytype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_OVERTIME_PAYTYPE: fieldBuilder.buildEdmTypeField(
          'JPOvertimePaytype',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chEmployeeTasCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_TAS_CITY: fieldBuilder.buildEdmTypeField(
          'CHEmployeeTASCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frPopulationWorkCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_POPULATION_WORK_CODE: fieldBuilder.buildEdmTypeField(
          'FRPopulationWorkCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpUniversalPensionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_UNIVERSAL_PENSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'JPUniversalPensionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mxWorkdayId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_WORKDAY_ID: fieldBuilder.buildEdmTypeField(
          'MXWorkdayID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link myPaymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MY_PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'MYPaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpSpouseGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_SPOUSE_GENDER: fieldBuilder.buildEdmTypeField(
          'JPSpouseGender',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frTerminationDisputeProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_TERMINATION_DISPUTE_PROCESS: fieldBuilder.buildEnumField(
          'FRTerminationDisputeProcess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link esBirthCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_BIRTH_COUNTRY: fieldBuilder.buildEdmTypeField(
          'ESBirthCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link luMonthlyHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LU_MONTHLY_HOURS: fieldBuilder.buildEdmTypeField(
          'LUMonthlyHours',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inSalaryCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_SALARY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'INSalaryCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpSpouseBirthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_SPOUSE_BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'JPSpouseBirthDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link arVacationDaysAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_VACATION_DAYS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ARVacationDaysAmount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sgContributeCdac} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_CONTRIBUTE_CDAC: fieldBuilder.buildEnumField(
          'SGContributeCDAC',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link myOvertimePayType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MY_OVERTIME_PAY_TYPE: fieldBuilder.buildEnumField(
          'MYOvertimePayType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link auBankLocationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AU_BANK_LOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'AUBankLocationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frBirthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_BIRTH_NAME: fieldBuilder.buildEdmTypeField(
          'FRBirthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esOccupationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_OCCUPATION_CODE: fieldBuilder.buildEdmTypeField(
          'ESOccupationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ieRetirementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IE_RETIREMENT_DATE: fieldBuilder.buildEdmTypeField(
          'IERetirementDate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frMultipleEmployers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_MULTIPLE_EMPLOYERS: fieldBuilder.buildEdmTypeField(
          'FRMultipleEmployers',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nlDirectorShareHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NL_DIRECTOR_SHARE_HOLDER: fieldBuilder.buildEnumField(
          'NLDirectorShareHolder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chEmployeeTasStCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_TAS_ST_CODE: fieldBuilder.buildEdmTypeField(
          'CHEmployeeTASStCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpPensionReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_PENSION_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JPPensionReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esContractOccupation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_CONTRACT_OCCUPATION: fieldBuilder.buildEdmTypeField(
          'ESContractOccupation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inuan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INUAN: fieldBuilder.buildEdmTypeField('INUAN', 'Edm.String', true),
        /**
         * Static representation of the {@link deOccName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DE_OCC_NAME: fieldBuilder.buildEdmTypeField(
          'DEOcc_Name',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jpHealthInsuranceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_HEALTH_INSURANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JPHealthInsuranceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inAadhaar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_AADHAAR: fieldBuilder.buildEdmTypeField(
          'INAadhaar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mxMilitaryServiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_MILITARY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'MXMilitaryServiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nlReductionWorkTimeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NL_REDUCTION_WORK_TIME_TAX: fieldBuilder.buildEnumField(
          'NLReductionWorkTimeTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link esbic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESBIC: fieldBuilder.buildEdmTypeField('ESBIC', 'Edm.String', true),
        /**
         * Static representation of the {@link mxWorkPermitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_WORK_PERMIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'MXWorkPermitNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inLegalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_LEGAL_NAME: fieldBuilder.buildEdmTypeField(
          'INLegalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sgOvertimePayType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_OVERTIME_PAY_TYPE: fieldBuilder.buildEnumField(
          'SGOvertimePayType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link myContributeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MY_CONTRIBUTE_TAX: fieldBuilder.buildEnumField(
          'MYContributeTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link myWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MY_WORKING_DAYS: fieldBuilder.buildEdmTypeField(
          'MYWorkingDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link esProRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_PRO_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ESProRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gbbsReferenceNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GBBS_REFERENCE_NO: fieldBuilder.buildEdmTypeField(
          'GBBSReferenceNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link myContributeEpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MY_CONTRIBUTE_EPF: fieldBuilder.buildEnumField(
          'MYContributeEPF',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link arNationalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_NATIONAL_ID: fieldBuilder.buildEdmTypeField(
          'ARNationalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esCollectiveAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_COLLECTIVE_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'ESCollectiveAgreementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arCategoryLevelStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_CATEGORY_LEVEL_START_DATE: fieldBuilder.buildEdmTypeField(
          'ARCategoryLevelStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nlLeaverSickOnLastDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NL_LEAVER_SICK_ON_LAST_DAY: fieldBuilder.buildEnumField(
          'NLLeaverSickOnLastDay',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link arSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'ARSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sgContributeSdl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_CONTRIBUTE_SDL: fieldBuilder.buildEnumField(
          'SGContributeSDL',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itLegalAddressFiscalCode0101} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_LEGAL_ADDRESS_FISCAL_CODE_0101: fieldBuilder.buildEdmTypeField(
          'ITLegalAddressFiscalCode0101',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link auWorkState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AU_WORK_STATE: fieldBuilder.buildEdmTypeField(
          'AUWorkState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpEmploymentInsuranceIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_EMPLOYMENT_INSURANCE_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'JPEmploymentInsuranceIssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link chWorkCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_WORK_CITY: fieldBuilder.buildEdmTypeField(
          'CHWorkCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpTaxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_TAX_CATEGORY: fieldBuilder.buildEdmTypeField(
          'JPTaxCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inPensionNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_PENSION_NO: fieldBuilder.buildEdmTypeField(
          'INPensionNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inContributeLabourWelfareFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_CONTRIBUTE_LABOUR_WELFARE_FUND: fieldBuilder.buildEnumField(
          'INContributeLabourWelfareFund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link arafjp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARAFJP: fieldBuilder.buildEdmTypeField('ARAFJP', 'Edm.String', true),
        /**
         * Static representation of the {@link myAccountHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MY_ACCOUNT_HOLDER: fieldBuilder.buildEdmTypeField(
          'MYAccountHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cnAccountHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CN_ACCOUNT_HOLDER: fieldBuilder.buildEdmTypeField(
          'CNAccountHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inWorkingDaysCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_WORKING_DAYS_CODE: fieldBuilder.buildEdmTypeField(
          'INWorkingDaysCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arWorkDayId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_WORK_DAY_ID: fieldBuilder.buildEdmTypeField(
          'ARWorkDayID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gbniLetter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GBNI_LETTER: fieldBuilder.buildEdmTypeField(
          'GBNILetter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inContributeProvidentFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_CONTRIBUTE_PROVIDENT_FUND: fieldBuilder.buildEnumField(
          'INContributeProvidentFund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sgContributeSinda} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_CONTRIBUTE_SINDA: fieldBuilder.buildEnumField(
          'SGContributeSINDA',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lubic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUBIC: fieldBuilder.buildEdmTypeField('LUBIC', 'Edm.String', true),
        /**
         * Static representation of the {@link inSecondaryNationalIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_SECONDARY_NATIONAL_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'INSecondaryNationalIdentifier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpBankBranchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_BANK_BRANCH_NAME: fieldBuilder.buildEdmTypeField(
          'JPBankBranchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arVacationStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_VACATION_START_DATE: fieldBuilder.buildEdmTypeField(
          'ARVacationStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nlFamilyOfOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NL_FAMILY_OF_OWNER: fieldBuilder.buildEnumField(
          'NLFamilyOfOwner',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link arVacationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_VACATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ARVacationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frTypeOfNoticePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_TYPE_OF_NOTICE_PERIOD: fieldBuilder.buildEdmTypeField(
          'FRTypeOfNoticePeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itBirthPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_BIRTH_PLACE: fieldBuilder.buildEdmTypeField(
          'ITBirthPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpEmploymentInsuranceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_EMPLOYMENT_INSURANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JPEmploymentInsuranceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frCollectiveAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_COLLECTIVE_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'FRCollectiveAgreementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itLegalAddressCity0101} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_LEGAL_ADDRESS_CITY_0101: fieldBuilder.buildEdmTypeField(
          'ITLegalAddressCity0101',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chWorkState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_WORK_STATE: fieldBuilder.buildEdmTypeField(
          'CHWorkState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esTypeOfStarterPayroll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_TYPE_OF_STARTER_PAYROLL: fieldBuilder.buildEdmTypeField(
          'ESTypeOfStarterPayroll',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nlGrossNet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NL_GROSS_NET: fieldBuilder.buildEdmTypeField(
          'NLGrossNet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hkContributeMpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HK_CONTRIBUTE_MPF: fieldBuilder.buildEnumField(
          'HKContributeMPF',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link esContractEndHolidays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_CONTRACT_END_HOLIDAYS: fieldBuilder.buildEdmTypeField(
          'ESContractEndHolidays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inEmployerProvidentFundRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_EMPLOYER_PROVIDENT_FUND_RATE: fieldBuilder.buildEdmTypeField(
          'INEmployerProvidentFundRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inotEntitlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INOT_ENTITLEMENT: fieldBuilder.buildEnumField(
          'INOTEntitlement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jpSpouseSurname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_SPOUSE_SURNAME: fieldBuilder.buildEdmTypeField(
          'JPSpouseSurname',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arUnionAgreements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_UNION_AGREEMENTS: fieldBuilder.buildEdmTypeField(
          'ARUnionAgreements',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arTaxExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_TAX_EXEMPT: fieldBuilder.buildEnumField('ARTaxExempt', NoYes, true),
        /**
         * Static representation of the {@link esProfessionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_PROFESSION_CODE: fieldBuilder.buildEdmTypeField(
          'ESProfessionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esCompanyContributionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_COMPANY_CONTRIBUTION_CODE: fieldBuilder.buildEdmTypeField(
          'ESCompanyContributionCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sgContributeEcf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_CONTRIBUTE_ECF: fieldBuilder.buildEnumField(
          'SGContributeECF',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link esNationalIdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_NATIONAL_ID_TYPE: fieldBuilder.buildEdmTypeField(
          'ESNationalIDType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chEmployeeTasTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_TAS_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'CHEmployeeTASTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpPensionIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_PENSION_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'JPPensionIssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mxShiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'MXShiftID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itLegalAddressRegionProvince0101} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_LEGAL_ADDRESS_REGION_PROVINCE_0101: fieldBuilder.buildEdmTypeField(
          'ITLegalAddressRegionProvince0101',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arUnionAgreementReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_UNION_AGREEMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ARUnionAgreementReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sgContributeCpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_CONTRIBUTE_CPF: fieldBuilder.buildEnumField(
          'SGContributeCPF',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sgContributeMbmf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_CONTRIBUTE_MBMF: fieldBuilder.buildEnumField(
          'SGContributeMBMF',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link myContributeSocso} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MY_CONTRIBUTE_SOCSO: fieldBuilder.buildEnumField(
          'MYContributeSOCSO',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itBirthPlaceRegionProvince} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_BIRTH_PLACE_REGION_PROVINCE: fieldBuilder.buildEdmTypeField(
          'ITBirthPlaceRegionProvince',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chEmployeeAlvCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_ALV_CODE: fieldBuilder.buildEdmTypeField(
          'CHEmployeeALVCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inAccountHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_ACCOUNT_HOLDER: fieldBuilder.buildEdmTypeField(
          'INAccountHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inpan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPAN: fieldBuilder.buildEdmTypeField('INPAN', 'Edm.Int32', false),
        /**
         * Static representation of the {@link chEmployeeAhvCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_AHV_CODE: fieldBuilder.buildEdmTypeField(
          'CHEmployeeAHVCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chApprenticeTrainee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_APPRENTICE_TRAINEE: fieldBuilder.buildEdmTypeField(
          'CHApprenticeTrainee',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esContractStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_CONTRACT_START_DATE: fieldBuilder.buildEdmTypeField(
          'ESContractStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jpHealthInsuranceIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_HEALTH_INSURANCE_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'JPHealthInsuranceIssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link arOtherDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_OTHER_DOCUMENTS: fieldBuilder.buildEnumField(
          'AROtherDocuments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sgLegalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SG_LEGAL_NAME: fieldBuilder.buildEdmTypeField(
          'SGLegalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hkPaymentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HK_PAYMENT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'HKPaymentCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mxTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'MXTaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inContributeIncomeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_CONTRIBUTE_INCOME_TAX: fieldBuilder.buildEnumField(
          'INContributeIncomeTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jpBankLocationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_BANK_LOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'JPBankLocationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mxNationalIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MX_NATIONAL_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'MXNationalIDNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gbSortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GB_SORT_CODE: fieldBuilder.buildEdmTypeField(
          'GBSortCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frTermsOfWorkPeriodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FR_TERMS_OF_WORK_PERIOD_CODE: fieldBuilder.buildEdmTypeField(
          'FRTermsOfWorkPeriodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inResignationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_RESIGNATION_DATE: fieldBuilder.buildEdmTypeField(
          'INResignationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link chEmployeeSuvaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_SUVA_CODE: fieldBuilder.buildEdmTypeField(
          'CHEmployeeSUVACode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chProfessionalPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_PROFESSIONAL_POSITION: fieldBuilder.buildEdmTypeField(
          'CHProfessionalPosition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iebic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IEBIC: fieldBuilder.buildEdmTypeField('IEBIC', 'Edm.String', true),
        /**
         * Static representation of the {@link arVacationDaysType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_VACATION_DAYS_TYPE: fieldBuilder.buildEdmTypeField(
          'ARVacationDaysType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chEmployeeKtgCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_EMPLOYEE_KTG_CODE: fieldBuilder.buildEdmTypeField(
          'CHEmployeeKTGCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cnTaxCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CN_TAX_CITY: fieldBuilder.buildEdmTypeField(
          'CNTaxCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ieprsiClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IEPRSI_CLASS: fieldBuilder.buildEdmTypeField(
          'IEPRSIClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link luiban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUIBAN: fieldBuilder.buildEdmTypeField('LUIBAN', 'Edm.String', true),
        /**
         * Static representation of the {@link inpfLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPF_LIMIT: fieldBuilder.buildEdmTypeField(
          'INPFLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link luBirthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LU_BIRTH_NAME: fieldBuilder.buildEdmTypeField(
          'LUBirthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inWorkingDaysPerWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_WORKING_DAYS_PER_WEEK: fieldBuilder.buildEdmTypeField(
          'INWorkingDaysPerWeek',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inEthnicGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_ETHNIC_GROUP: fieldBuilder.buildEdmTypeField(
          'INEthnicGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_LEVEL: fieldBuilder.buildEdmTypeField('ITLevel', 'Edm.String', true),
        /**
         * Static representation of the {@link cnOvertimePaytype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CN_OVERTIME_PAYTYPE: fieldBuilder.buildEdmTypeField(
          'CNOvertimePaytype',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inContributeEsi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_CONTRIBUTE_ESI: fieldBuilder.buildEnumField(
          'INContributeESI',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inVoluntaryProvidentFundRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_VOLUNTARY_PROVIDENT_FUND_RATE: fieldBuilder.buildEdmTypeField(
          'INVoluntaryProvidentFundRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link chForeignerCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CH_FOREIGNER_CATEGORY: fieldBuilder.buildEdmTypeField(
          'CHForeignerCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jpSpouseFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JP_SPOUSE_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'JPSpouseFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esPaymentCalendarType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_PAYMENT_CALENDAR_TYPE: fieldBuilder.buildEdmTypeField(
          'ESPaymentCalendarType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link ieAccountHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IE_ACCOUNT_HOLDER: fieldBuilder.buildEdmTypeField(
          'IEAccountHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inWorkState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_WORK_STATE: fieldBuilder.buildEdmTypeField(
          'INWorkState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nlPreviousOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NL_PREVIOUS_OWNER: fieldBuilder.buildEnumField(
          'NLPreviousOwner',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonCountrySpecificFields)
      };
    }

    return this._schema;
  }
}
