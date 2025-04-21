/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayAgreementLines } from './PayAgreementLines';
import { PayAgreementLinesRequestBuilder } from './PayAgreementLinesRequestBuilder';
import { OperationsApi } from './OperationsApi';
import { PayAgreementsApi } from './PayAgreementsApi';
import { JmgRoundTypeEnum } from './JmgRoundTypeEnum';
import { NoYes } from './NoYes';
import { DayMonth } from './DayMonth';
import { JmgProfileStartCode } from './JmgProfileStartCode';
import { JmgDayIdEnum } from './JmgDayIdEnum';
import { JmgPaySpecTypeEnum } from './JmgPaySpecTypeEnum';
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
export class PayAgreementLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayAgreementLines<DeSerializersT>, DeSerializersT>
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
  ): PayAgreementLinesApi<DeSerializersT> {
    return new PayAgreementLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link routeOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATION: OneToOneLink<
      PayAgreementLines<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT: OneToOneLink<
      PayAgreementLines<DeSerializersT>,
      DeSerializersT,
      PayAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationsApi<DeSerializersT>,
      PayAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_OPERATION: new OneToOneLink('RouteOperation', this, linkedApis[0]),
      PAY_AGREEMENT: new OneToOneLink('PayAgreement', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PayAgreementLines;

  requestBuilder(): PayAgreementLinesRequestBuilder<DeSerializersT> {
    return new PayAgreementLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayAgreementLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayAgreementLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayAgreementLines<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PayAgreementLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayAgreementLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ROUTE_OPERATION_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_QUANTITY_ROUNDING_TYPE: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      JmgRoundTypeEnum,
      true,
      true
    >;
    ON_CALL_INDIRECT_TIME_AND_ATTENDANCE_ACTIVITY_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECONDARY_PAY_TYPE_CODE: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVERTED_SIGN: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_CANCEL_PAYMENT: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FROM_AGREEMENT_DATE: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ABSENCE_CODE: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_SENIORITY_UNIT: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      DayMonth,
      true,
      true
    >;
    PROFILE_START_CODE: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      JmgProfileStartCode,
      true,
      true
    >;
    TO_AGREEMENT_DATE: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PAY_QUANTITY_FIXED: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_PAY_QUANTITY_FACTOR: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TIME_PROFILE_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_PAY_TYPE_CODE: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEEK_DAY: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      JmgDayIdEnum,
      true,
      true
    >;
    IS_PAID_TIME_REQUIRED: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_CERTIFICATE_TYPE: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_SKILL_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_AGREEMENT_CODE: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_AGREEMENT_EXCEPTION_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_SENIORITY: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROUND_OFF_SECONDS: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_SENIORITY: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ABSENCE_INDIRECT_TIME_AND_ATTENDANCE_ACTIVITY_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSTANT_PAY_QUANTITY: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ACTIVITY_NUMBER: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_SENIORITY_UNIT: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      DayMonth,
      true,
      true
    >;
    WILL_ROUND_OFF_QUANTITY_BEFORE_MULTIPLYING_FACTOR: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_AGREEMENT_TIME: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FROM_AGREEMENT_TIME: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SWITCH_CODE_INDIRECT_TIME_AND_ATTENDANCE_ACTIVITY_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECONDARY_PAY_QUANTITY_FACTOR: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAGE_TYPE: EnumField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      JmgPaySpecTypeEnum,
      true,
      true
    >;
    PAY_AGREEMENT_COUNT_UNIT_ID: OrderableEdmTypeField<
      PayAgreementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATION: OneToOneLink<
      PayAgreementLines<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT: OneToOneLink<
      PayAgreementLines<DeSerializersT>,
      DeSerializersT,
      PayAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayAgreementLines<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link routeOperationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'RouteOperationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payQuantityRoundingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_QUANTITY_ROUNDING_TYPE: fieldBuilder.buildEnumField(
          'PayQuantityRoundingType',
          JmgRoundTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link onCallIndirectTimeAndAttendanceActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_CALL_INDIRECT_TIME_AND_ATTENDANCE_ACTIVITY_ID:
          fieldBuilder.buildEdmTypeField(
            'OnCallIndirectTimeAndAttendanceActivityId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link secondaryPayTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_PAY_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'SecondaryPayTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInvertedSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVERTED_SIGN: fieldBuilder.buildEnumField(
          'IsInvertedSign',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willCancelPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_CANCEL_PAYMENT: fieldBuilder.buildEnumField(
          'WillCancelPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fromAgreementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_AGREEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'FromAgreementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link absenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_CODE: fieldBuilder.buildEdmTypeField(
          'AbsenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumSeniorityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_SENIORITY_UNIT: fieldBuilder.buildEnumField(
          'MaximumSeniorityUnit',
          DayMonth,
          true
        ),
        /**
         * Static representation of the {@link profileStartCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_START_CODE: fieldBuilder.buildEnumField(
          'ProfileStartCode',
          JmgProfileStartCode,
          true
        ),
        /**
         * Static representation of the {@link toAgreementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_AGREEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ToAgreementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPayQuantityFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAY_QUANTITY_FIXED: fieldBuilder.buildEnumField(
          'IsPayQuantityFixed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryPayQuantityFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PAY_QUANTITY_FACTOR: fieldBuilder.buildEdmTypeField(
          'PrimaryPayQuantityFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link timeProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'TimeProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryPayTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_PAY_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryPayTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link weekDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEK_DAY: fieldBuilder.buildEnumField('WeekDay', JmgDayIdEnum, true),
        /**
         * Static representation of the {@link isPaidTimeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAID_TIME_REQUIRED: fieldBuilder.buildEdmTypeField(
          'IsPaidTimeRequired',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredCertificateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_CERTIFICATE_TYPE: fieldBuilder.buildEdmTypeField(
          'RequiredCertificateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredSkillId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_SKILL_ID: fieldBuilder.buildEdmTypeField(
          'RequiredSkillId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'PayAgreementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payAgreementExceptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_AGREEMENT_EXCEPTION_ID: fieldBuilder.buildEdmTypeField(
          'PayAgreementExceptionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumSeniority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SENIORITY: fieldBuilder.buildEdmTypeField(
          'MinimumSeniority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link roundOffSeconds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_SECONDS: fieldBuilder.buildEdmTypeField(
          'RoundOffSeconds',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maximumSeniority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_SENIORITY: fieldBuilder.buildEdmTypeField(
          'MaximumSeniority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link absenceIndirectTimeAndAttendanceActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_INDIRECT_TIME_AND_ATTENDANCE_ACTIVITY_ID:
          fieldBuilder.buildEdmTypeField(
            'AbsenceIndirectTimeAndAttendanceActivityId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link constantPayQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_PAY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConstantPayQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumSeniorityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SENIORITY_UNIT: fieldBuilder.buildEnumField(
          'MinimumSeniorityUnit',
          DayMonth,
          true
        ),
        /**
         * Static representation of the {@link willRoundOffQuantityBeforeMultiplyingFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_ROUND_OFF_QUANTITY_BEFORE_MULTIPLYING_FACTOR:
          fieldBuilder.buildEnumField(
            'WillRoundOffQuantityBeforeMultiplyingFactor',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link toAgreementTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_AGREEMENT_TIME: fieldBuilder.buildEdmTypeField(
          'ToAgreementTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fromAgreementTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_AGREEMENT_TIME: fieldBuilder.buildEdmTypeField(
          'FromAgreementTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link switchCodeIndirectTimeAndAttendanceActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SWITCH_CODE_INDIRECT_TIME_AND_ATTENDANCE_ACTIVITY_ID:
          fieldBuilder.buildEdmTypeField(
            'SwitchCodeIndirectTimeAndAttendanceActivityId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondaryPayQuantityFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_PAY_QUANTITY_FACTOR: fieldBuilder.buildEdmTypeField(
          'SecondaryPayQuantityFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAGE_TYPE: fieldBuilder.buildEnumField(
          'WageType',
          JmgPaySpecTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link payAgreementCountUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_AGREEMENT_COUNT_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'PayAgreementCountUnitId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayAgreementLines)
      };
    }

    return this._schema;
  }
}
