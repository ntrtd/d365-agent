/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrReqPlanContinuities } from './McrReqPlanContinuities';
import { McrReqPlanContinuitiesRequestBuilder } from './McrReqPlanContinuitiesRequestBuilder';
import { NoYes } from './NoYes';
import { OmOperatingUnitType } from './OmOperatingUnitType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class McrReqPlanContinuitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<McrReqPlanContinuities<DeSerializersT>, DeSerializersT>
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
  ): McrReqPlanContinuitiesApi<DeSerializersT> {
    return new McrReqPlanContinuitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrReqPlanContinuities;

  requestBuilder(): McrReqPlanContinuitiesRequestBuilder<DeSerializersT> {
    return new McrReqPlanContinuitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrReqPlanContinuities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      McrReqPlanContinuities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    McrReqPlanContinuities<DeSerializersT>,
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
    typeof McrReqPlanContinuities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        McrReqPlanContinuities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRED_PLAN_ID_CONTINUITY: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_PROBABALISTIC_CONTINUITY: EnumField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_FENCE_CAPACITY: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PLANNED_ORDER_SCOPE_DATA_AREA: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_COMPANY_INFO_DATA_AREA: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_LOG_YEAR_NAME: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_FENCE_COVERAGE: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPT_MARGIN: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PLANNED_ORDER_CALENDAR_ID: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_NUMBER_SEQUENCE: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_LOG_OM_OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_MARGIN: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_FENCE_EXPLOSION: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUIRED_LOG_OPERATING_UNIT_TYPE: EnumField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    REQUIRED_LOG_NUMBER_SEQUENCE: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERING_MARGIN: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PLANNED_ORDER_OM_OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_LOG_PERIOD_NAME: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_SCOPE_OPERATING_UNIT_TYPE: EnumField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    REQUIRED_LOG_COMPANY_INFO_DATA_AREA: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_LOG_COMPANY_INFO_PARTY_NUMBER: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_COMPANY_INFO_PARTY_NUMBER: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_LOG_DATA_AREA: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_PERIOD_NAME: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_YEAR_NAME: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_COVERAGE_CALCULATIONS: EnumField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRED_LOG_CALENDAR_ID: OrderableEdmTypeField<
      McrReqPlanContinuities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<McrReqPlanContinuities<DeSerializers>>;
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
         * Static representation of the {@link requiredPlanIdContinuity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_PLAN_ID_CONTINUITY: fieldBuilder.buildEdmTypeField(
          'RequiredPlanIdContinuity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link useProbabalisticContinuity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PROBABALISTIC_CONTINUITY: fieldBuilder.buildEnumField(
          'UseProbabalisticContinuity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link timeFenceCapacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_FENCE_CAPACITY: fieldBuilder.buildEdmTypeField(
          'TimeFenceCapacity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderScopeDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_SCOPE_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'PlannedOrderScopeDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderCompanyInfoDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_COMPANY_INFO_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'PlannedOrderCompanyInfoDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredLogYearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'RequiredLogYearName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeFenceCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_FENCE_COVERAGE: fieldBuilder.buildEdmTypeField(
          'TimeFenceCoverage',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiptMargin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_MARGIN: fieldBuilder.buildEdmTypeField(
          'ReceiptMargin',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PlannedOrderCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderNumberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'PlannedOrderNumberSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredLogOmOperatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_OM_OPERATING_UNIT_PARTY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'RequiredLogOMOperatingUnitPartyNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link issueMargin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_MARGIN: fieldBuilder.buildEdmTypeField(
          'IssueMargin',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link timeFenceExplosion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_FENCE_EXPLOSION: fieldBuilder.buildEdmTypeField(
          'TimeFenceExplosion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link requiredLogOperatingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_OPERATING_UNIT_TYPE: fieldBuilder.buildEnumField(
          'RequiredLogOperatingUnitType',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link requiredLogNumberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'RequiredLogNumberSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderingMargin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_MARGIN: fieldBuilder.buildEdmTypeField(
          'OrderingMargin',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderOmOperatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_OM_OPERATING_UNIT_PARTY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'PlannedOrderOMOperatingUnitPartyNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link requiredLogPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'RequiredLogPeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderScopeOperatingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_SCOPE_OPERATING_UNIT_TYPE: fieldBuilder.buildEnumField(
          'PlannedOrderScopeOperatingUnitType',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link requiredLogCompanyInfoDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_COMPANY_INFO_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'RequiredLogCompanyInfoDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredLogCompanyInfoPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_COMPANY_INFO_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequiredLogCompanyInfoPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderCompanyInfoPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_COMPANY_INFO_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlannedOrderCompanyInfoPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredLogDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'RequiredLogDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'PlannedOrderPeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderYearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'PlannedOrderYearName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipCoverageCalculations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_COVERAGE_CALCULATIONS: fieldBuilder.buildEnumField(
          'SkipCoverageCalculations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requiredLogCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_LOG_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'RequiredLogCalendarId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrReqPlanContinuities)
      };
    }

    return this._schema;
  }
}
