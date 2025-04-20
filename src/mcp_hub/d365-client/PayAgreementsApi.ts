/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayAgreements } from './PayAgreements';
import { PayAgreementsRequestBuilder } from './PayAgreementsRequestBuilder';
import { PayAgreementLinesApi } from './PayAgreementLinesApi';
import { TimeAndAttendanceTimeProfilesApi } from './TimeAndAttendanceTimeProfilesApi';
import { JmgRoundTypeEnum } from './JmgRoundTypeEnum';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PayAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayAgreements<DeSerializersT>, DeSerializersT>
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
  ): PayAgreementsApi<DeSerializersT> {
    return new PayAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT_LINES: OneToManyLink<
      PayAgreements<DeSerializersT>,
      DeSerializersT,
      PayAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILES: OneToManyLink<
      PayAgreements<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayAgreementLinesApi<DeSerializersT>,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_AGREEMENT_LINES: new OneToManyLink(
        'PayAgreementLines',
        this,
        linkedApis[0]
      ),
      TIME_AND_ATTENDANCE_TIME_PROFILES: new OneToManyLink(
        'TimeAndAttendanceTimeProfiles',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PayAgreements;

  requestBuilder(): PayAgreementsRequestBuilder<DeSerializersT> {
    return new PayAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayAgreements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayAgreements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayAgreements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PayAgreements, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_AGREEMENT_CODE: OrderableEdmTypeField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OVERTIME_ROUNDING_TYPE: EnumField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      JmgRoundTypeEnum,
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OVERTIME_ROUNDING_VALUE: OrderableEdmTypeField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINUTES_TO_DEDUCT_WHEN_LATE: OrderableEdmTypeField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      PayAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_AGREEMENT_LINES: OneToManyLink<
      PayAgreements<DeSerializersT>,
      DeSerializersT,
      PayAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAndAttendanceTimeProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_AND_ATTENDANCE_TIME_PROFILES: OneToManyLink<
      PayAgreements<DeSerializersT>,
      DeSerializersT,
      TimeAndAttendanceTimeProfilesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayAgreements<DeSerializers>>;
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
         * Static representation of the {@link payAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'PayAgreementCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link overtimeRoundingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERTIME_ROUNDING_TYPE: fieldBuilder.buildEnumField(
          'OvertimeRoundingType',
          JmgRoundTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link overtimeRoundingValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERTIME_ROUNDING_VALUE: fieldBuilder.buildEdmTypeField(
          'OvertimeRoundingValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minutesToDeductWhenLate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINUTES_TO_DEDUCT_WHEN_LATE: fieldBuilder.buildEdmTypeField(
          'MinutesToDeductWhenLate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayAgreements)
      };
    }

    return this._schema;
  }
}
