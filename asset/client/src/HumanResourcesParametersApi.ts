/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HumanResourcesParameters } from './HumanResourcesParameters';
import { HumanResourcesParametersRequestBuilder } from './HumanResourcesParametersRequestBuilder';
import { RatingModelsApi } from './RatingModelsApi';
import { IdentificationTypesApi } from './IdentificationTypesApi';
import { NoYes } from './NoYes';
import { HcmFmlaEligibilityPriorityDateType } from './HcmFmlaEligibilityPriorityDateType';
import { PeriodUnit } from './PeriodUnit';
import { HcmViewExitingWorkerOption } from './HcmViewExitingWorkerOption';
import { HcmYearsOfServiceDisplay } from './HcmYearsOfServiceDisplay';
import { HcmOpenPositionsType } from './HcmOpenPositionsType';
import { HcmFmlaEligibilityPeriodType } from './HcmFmlaEligibilityPeriodType';
import { HcmFmlaCalendarType } from './HcmFmlaCalendarType';
import { HrmCompRatingModel } from './HrmCompRatingModel';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveBalanceCalculationOption } from './LeaveBalanceCalculationOption';
import { LeaveMonthsOfServiceCalculationOption } from './LeaveMonthsOfServiceCalculationOption';
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
export class HumanResourcesParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HumanResourcesParameters<DeSerializersT>, DeSerializersT>
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
  ): HumanResourcesParametersApi<DeSerializersT> {
    return new HumanResourcesParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compensationCompetencyRatingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_COMPETENCY_RATING_MODEL: OneToOneLink<
      HumanResourcesParameters<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RatingModelsApi<DeSerializersT>,
      IdentificationTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_COMPETENCY_RATING_MODEL: new OneToOneLink(
        'CompensationCompetencyRatingModel',
        this,
        linkedApis[0]
      ),
      DEFAULT_IDENTIFICATION_TYPE: new OneToOneLink(
        'DefaultIdentificationType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = HumanResourcesParameters;

  requestBuilder(): HumanResourcesParametersRequestBuilder<DeSerializersT> {
    return new HumanResourcesParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HumanResourcesParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HumanResourcesParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HumanResourcesParameters<DeSerializersT>,
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
    typeof HumanResourcesParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HumanResourcesParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENABLE_INJURY_ILLNESS_INCIDENT_RETENTION: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_4: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    FMLA_ENTITLEMENT_STANDARD_HOURS: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSS_EXITING_WORKERS_PERIOD_UNIT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    FMLA_ELIGIBILITY_LENGTH_OF_EMPLOYMENT: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYMENT_METHOD_OTHER: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VIEW_EXPIRING_RECORDS_RANGE: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEAVING_SOON_WORKERS_PERIOD_UNIT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    POSTAL_ADDRESS_CHANGE_PERIOD: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    APPLICATION_WORD_DOCU_TYPE_ID: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD_CHECK: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_4: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_2: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_3: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_1: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    LEAVING_SOON_WORKERS_PERIOD: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INJURY_ILLNESS_INCIDENT_RETENTION_DAYS: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ABSENCE_STATUS_COLOR: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSS_VIEW_EXITING_WORKER_OPTION: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmViewExitingWorkerOption,
      true,
      true
    >;
    YEARS_OF_SERVICE_DISPLAY: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmYearsOfServiceDisplay,
      true,
      true
    >;
    FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_3: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    VIEW_EXPIRED_RECORDS_RANGE: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPENSATION_COMPETENCY_RATING_MODEL_ID: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_2: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    RECENT_HIRE_WORKERS_PERIOD: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MSS_OPEN_POSITIONS_TYPE: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmOpenPositionsType,
      true,
      true
    >;
    DEFAULT_IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FMLA_ELIGIBILITY_PERIOD_TYPE: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPeriodType,
      true,
      true
    >;
    FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_1: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaEligibilityPriorityDateType,
      true,
      true
    >;
    PAYMENT_METHOD_BANK_DRAFT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLICATION_EXPIRATION_PERIOD_UNIT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    APPLICATION_EMAIL_DOCU_TYPE_ID: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_ATTACHMENT_TYPE: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_EXPIRATION_PERIOD: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_DISBURSEMENT_VALIDATION_DISABLED: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IDENTIFICATION_TYPE_DEFAULT: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALLOW_REHIRE_DEFAULT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_METHOD_ELECTRONIC_PAYMENT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MSS_EXITING_WORKERS_PERIOD: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_ACCOUNT_AND_ROUTING_NUMBER_VALIDATION_DISABLED: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FMLA_ENTITLEMENT_USE_ELIGIBILITY_PRIORITY_SEQUENCE: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FMLA_ENTITLEMENT_LEAVE_CALENDAR_TYPE: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HcmFmlaCalendarType,
      true,
      true
    >;
    PAYMENT_METHOD_CASH: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FMLA_ENTITLEMENT_MILITARY_HOURS: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FMLA_ELIGIBILITY_HOURS_WORKED: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    APPLICATION_UNSOLICTED_RECRUITING_ID: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECENT_HIRE_WORKERS_PERIOD_UNIT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    FMLA_ENTITLEMENT_LEAVE_CALENDAR_START_DATE: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_DO_NOT_RESTRICT_UPDATES_TO_PLANS_WITH_LIFE_EVENT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_EXTENDED_DESIGNEE_REQUIREMENTS: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_ENROLLMENT_CONFIRMATION_DEFAULT_EMAIL_FROM_ADDRESS: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_LOCK_CONFIRMED_PLANS: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_ENROLLMENT_CONFIRMATION_SEND_EMAIL: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_ESS_NEW_HIRE_ENROLLMENT_PERIOD: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BENEFIT_FUTURE_BIRTH_DATE_ELIGIBILITY: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_ENROLLMENT_CONFIRMATION_EMAIL_TEMPLATE_ID: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXITED_WORKERS_PERIOD: OrderableEdmTypeField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXITED_WORKERS_PERIOD_UNIT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    COMPENSATION_RATING_SOURCE: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      HrmCompRatingModel,
      true,
      true
    >;
    ENABLE_HALF_DAY_DEFINITION: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEAVE_AMOUNT_UNIT: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      LeaveAmountUnit,
      true,
      true
    >;
    LEAVE_BALANCE_CALCULATION_OPTION: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      LeaveBalanceCalculationOption,
      true,
      true
    >;
    LEAVE_MONTHS_OF_SERVICE_CALCULATION_OPTION: EnumField<
      HumanResourcesParameters<DeSerializers>,
      DeSerializersT,
      LeaveMonthsOfServiceCalculationOption,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationCompetencyRatingModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_COMPETENCY_RATING_MODEL: OneToOneLink<
      HumanResourcesParameters<DeSerializersT>,
      DeSerializersT,
      RatingModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultIdentificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_IDENTIFICATION_TYPE: OneToOneLink<
      HumanResourcesParameters<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<HumanResourcesParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link enableInjuryIllnessIncidentRetention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_INJURY_ILLNESS_INCIDENT_RETENTION: fieldBuilder.buildEnumField(
          'EnableInjuryIllnessIncidentRetention',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fmlaEligibilityPriorityDateSequence4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_4: fieldBuilder.buildEnumField(
          'FMLAEligibilityPriorityDateSequence4',
          HcmFmlaEligibilityPriorityDateType,
          true
        ),
        /**
         * Static representation of the {@link fmlaEntitlementStandardHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_STANDARD_HOURS: fieldBuilder.buildEdmTypeField(
          'FMLAEntitlementStandardHours',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mssExitingWorkersPeriodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSS_EXITING_WORKERS_PERIOD_UNIT: fieldBuilder.buildEnumField(
          'MssExitingWorkersPeriodUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link fmlaEligibilityLengthOfEmployment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ELIGIBILITY_LENGTH_OF_EMPLOYMENT: fieldBuilder.buildEdmTypeField(
          'FMLAEligibilityLengthOfEmployment',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link paymentMethodOther} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_OTHER: fieldBuilder.buildEnumField(
          'PaymentMethodOther',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link viewExpiringRecordsRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_EXPIRING_RECORDS_RANGE: fieldBuilder.buildEdmTypeField(
          'ViewExpiringRecordsRange',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link leavingSoonWorkersPeriodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVING_SOON_WORKERS_PERIOD_UNIT: fieldBuilder.buildEnumField(
          'LeavingSoonWorkersPeriodUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link postalAddressChangePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS_CHANGE_PERIOD: fieldBuilder.buildEdmTypeField(
          'PostalAddressChangePeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link applicationWordDocuTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_WORD_DOCU_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ApplicationWordDocuTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentMethodCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_CHECK: fieldBuilder.buildEnumField(
          'PaymentMethodCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fmlaEntitlementAnniversaryPriorityDateSequence4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_4:
          fieldBuilder.buildEnumField(
            'FMLAEntitlementAnniversaryPriorityDateSequence4',
            HcmFmlaEligibilityPriorityDateType,
            true
          ),
        /**
         * Static representation of the {@link fmlaEntitlementAnniversaryPriorityDateSequence2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_2:
          fieldBuilder.buildEnumField(
            'FMLAEntitlementAnniversaryPriorityDateSequence2',
            HcmFmlaEligibilityPriorityDateType,
            true
          ),
        /**
         * Static representation of the {@link fmlaEntitlementAnniversaryPriorityDateSequence3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_3:
          fieldBuilder.buildEnumField(
            'FMLAEntitlementAnniversaryPriorityDateSequence3',
            HcmFmlaEligibilityPriorityDateType,
            true
          ),
        /**
         * Static representation of the {@link fmlaEntitlementAnniversaryPriorityDateSequence1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_ANNIVERSARY_PRIORITY_DATE_SEQUENCE_1:
          fieldBuilder.buildEnumField(
            'FMLAEntitlementAnniversaryPriorityDateSequence1',
            HcmFmlaEligibilityPriorityDateType,
            true
          ),
        /**
         * Static representation of the {@link leavingSoonWorkersPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVING_SOON_WORKERS_PERIOD: fieldBuilder.buildEdmTypeField(
          'LeavingSoonWorkersPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link injuryIllnessIncidentRetentionDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INJURY_ILLNESS_INCIDENT_RETENTION_DAYS: fieldBuilder.buildEdmTypeField(
          'InjuryIllnessIncidentRetentionDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link absenceStatusColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_STATUS_COLOR: fieldBuilder.buildEdmTypeField(
          'AbsenceStatusColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mssViewExitingWorkerOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSS_VIEW_EXITING_WORKER_OPTION: fieldBuilder.buildEnumField(
          'MssViewExitingWorkerOption',
          HcmViewExitingWorkerOption,
          true
        ),
        /**
         * Static representation of the {@link yearsOfServiceDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS_OF_SERVICE_DISPLAY: fieldBuilder.buildEnumField(
          'YearsOfServiceDisplay',
          HcmYearsOfServiceDisplay,
          true
        ),
        /**
         * Static representation of the {@link fmlaEligibilityPriorityDateSequence3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_3: fieldBuilder.buildEnumField(
          'FMLAEligibilityPriorityDateSequence3',
          HcmFmlaEligibilityPriorityDateType,
          true
        ),
        /**
         * Static representation of the {@link viewExpiredRecordsRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_EXPIRED_RECORDS_RANGE: fieldBuilder.buildEdmTypeField(
          'ViewExpiredRecordsRange',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link compensationCompetencyRatingModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_COMPETENCY_RATING_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'CompensationCompetencyRatingModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fmlaEligibilityPriorityDateSequence2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_2: fieldBuilder.buildEnumField(
          'FMLAEligibilityPriorityDateSequence2',
          HcmFmlaEligibilityPriorityDateType,
          true
        ),
        /**
         * Static representation of the {@link recentHireWorkersPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECENT_HIRE_WORKERS_PERIOD: fieldBuilder.buildEdmTypeField(
          'RecentHireWorkersPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mssOpenPositionsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSS_OPEN_POSITIONS_TYPE: fieldBuilder.buildEnumField(
          'MssOpenPositionsType',
          HcmOpenPositionsType,
          true
        ),
        /**
         * Static representation of the {@link defaultIdentificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultIdentificationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fmlaEligibilityPeriodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ELIGIBILITY_PERIOD_TYPE: fieldBuilder.buildEnumField(
          'FMLAEligibilityPeriodType',
          HcmFmlaEligibilityPeriodType,
          true
        ),
        /**
         * Static representation of the {@link fmlaEligibilityPriorityDateSequence1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ELIGIBILITY_PRIORITY_DATE_SEQUENCE_1: fieldBuilder.buildEnumField(
          'FMLAEligibilityPriorityDateSequence1',
          HcmFmlaEligibilityPriorityDateType,
          true
        ),
        /**
         * Static representation of the {@link paymentMethodBankDraft} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_BANK_DRAFT: fieldBuilder.buildEnumField(
          'PaymentMethodBankDraft',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applicationExpirationPeriodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_EXPIRATION_PERIOD_UNIT: fieldBuilder.buildEnumField(
          'ApplicationExpirationPeriodUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link applicationEmailDocuTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_EMAIL_DOCU_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ApplicationEmailDocuTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicationAttachmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_ATTACHMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ApplicationAttachmentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicationExpirationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_EXPIRATION_PERIOD: fieldBuilder.buildEdmTypeField(
          'ApplicationExpirationPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicDisbursementValidationDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_DISBURSEMENT_VALIDATION_DISABLED:
          fieldBuilder.buildEnumField(
            'ElectronicDisbursementValidationDisabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link identificationTypeDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_DEFAULT: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeDefault',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link allowRehireDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_REHIRE_DEFAULT: fieldBuilder.buildEnumField(
          'AllowRehireDefault',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentMethodElectronicPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_ELECTRONIC_PAYMENT: fieldBuilder.buildEnumField(
          'PaymentMethodElectronicPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mssExitingWorkersPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSS_EXITING_WORKERS_PERIOD: fieldBuilder.buildEdmTypeField(
          'MssExitingWorkersPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bankAccountAndRoutingNumberValidationDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_AND_ROUTING_NUMBER_VALIDATION_DISABLED:
          fieldBuilder.buildEnumField(
            'BankAccountAndRoutingNumberValidationDisabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link fmlaEntitlementUseEligibilityPrioritySequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_USE_ELIGIBILITY_PRIORITY_SEQUENCE:
          fieldBuilder.buildEnumField(
            'FMLAEntitlementUseEligibilityPrioritySequence',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link fmlaEntitlementLeaveCalendarType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_LEAVE_CALENDAR_TYPE: fieldBuilder.buildEnumField(
          'FMLAEntitlementLeaveCalendarType',
          HcmFmlaCalendarType,
          true
        ),
        /**
         * Static representation of the {@link paymentMethodCash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_CASH: fieldBuilder.buildEnumField(
          'PaymentMethodCash',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fmlaEntitlementMilitaryHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_MILITARY_HOURS: fieldBuilder.buildEdmTypeField(
          'FMLAEntitlementMilitaryHours',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fmlaEligibilityHoursWorked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ELIGIBILITY_HOURS_WORKED: fieldBuilder.buildEdmTypeField(
          'FMLAEligibilityHoursWorked',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link applicationUnsolictedRecruitingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_UNSOLICTED_RECRUITING_ID: fieldBuilder.buildEdmTypeField(
          'ApplicationUnsolictedRecruitingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recentHireWorkersPeriodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECENT_HIRE_WORKERS_PERIOD_UNIT: fieldBuilder.buildEnumField(
          'RecentHireWorkersPeriodUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link fmlaEntitlementLeaveCalendarStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FMLA_ENTITLEMENT_LEAVE_CALENDAR_START_DATE:
          fieldBuilder.buildEdmTypeField(
            'FMLAEntitlementLeaveCalendarStartDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link benefitDoNotRestrictUpdatesToPlansWithLifeEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_DO_NOT_RESTRICT_UPDATES_TO_PLANS_WITH_LIFE_EVENT:
          fieldBuilder.buildEnumField(
            'BenefitDoNotRestrictUpdatesToPlansWithLifeEvent',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link benefitExtendedDesigneeRequirements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_EXTENDED_DESIGNEE_REQUIREMENTS: fieldBuilder.buildEnumField(
          'BenefitExtendedDesigneeRequirements',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitEnrollmentConfirmationDefaultEmailFromAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ENROLLMENT_CONFIRMATION_DEFAULT_EMAIL_FROM_ADDRESS:
          fieldBuilder.buildEdmTypeField(
            'BenefitEnrollmentConfirmationDefaultEmailFromAddress',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link benefitLockConfirmedPlans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_LOCK_CONFIRMED_PLANS: fieldBuilder.buildEnumField(
          'BenefitLockConfirmedPlans',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitEnrollmentConfirmationSendEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ENROLLMENT_CONFIRMATION_SEND_EMAIL: fieldBuilder.buildEnumField(
          'BenefitEnrollmentConfirmationSendEmail',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitEssNewHireEnrollmentPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ESS_NEW_HIRE_ENROLLMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'BenefitEssNewHireEnrollmentPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link benefitFutureBirthDateEligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_FUTURE_BIRTH_DATE_ELIGIBILITY: fieldBuilder.buildEnumField(
          'BenefitFutureBirthDateEligibility',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitEnrollmentConfirmationEmailTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ENROLLMENT_CONFIRMATION_EMAIL_TEMPLATE_ID:
          fieldBuilder.buildEdmTypeField(
            'BenefitEnrollmentConfirmationEmailTemplateId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link exitedWorkersPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXITED_WORKERS_PERIOD: fieldBuilder.buildEdmTypeField(
          'ExitedWorkersPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link exitedWorkersPeriodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXITED_WORKERS_PERIOD_UNIT: fieldBuilder.buildEnumField(
          'ExitedWorkersPeriodUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link compensationRatingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_RATING_SOURCE: fieldBuilder.buildEnumField(
          'CompensationRatingSource',
          HrmCompRatingModel,
          true
        ),
        /**
         * Static representation of the {@link enableHalfDayDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_HALF_DAY_DEFINITION: fieldBuilder.buildEnumField(
          'EnableHalfDayDefinition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leaveAmountUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_AMOUNT_UNIT: fieldBuilder.buildEnumField(
          'LeaveAmountUnit',
          LeaveAmountUnit,
          true
        ),
        /**
         * Static representation of the {@link leaveBalanceCalculationOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_BALANCE_CALCULATION_OPTION: fieldBuilder.buildEnumField(
          'LeaveBalanceCalculationOption',
          LeaveBalanceCalculationOption,
          true
        ),
        /**
         * Static representation of the {@link leaveMonthsOfServiceCalculationOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_MONTHS_OF_SERVICE_CALCULATION_OPTION: fieldBuilder.buildEnumField(
          'LeaveMonthsOfServiceCalculationOption',
          LeaveMonthsOfServiceCalculationOption,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HumanResourcesParameters)
      };
    }

    return this._schema;
  }
}
