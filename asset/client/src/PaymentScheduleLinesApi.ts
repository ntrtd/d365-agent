/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentScheduleLines } from './PaymentScheduleLines';
import { PaymentScheduleLinesRequestBuilder } from './PaymentScheduleLinesRequestBuilder';
import { PaymentSchedulesApi } from './PaymentSchedulesApi';
import { PercentAmount } from './PercentAmount';
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
export class PaymentScheduleLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentScheduleLines<DeSerializersT>, DeSerializersT>
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
  ): PaymentScheduleLinesApi<DeSerializersT> {
    return new PaymentScheduleLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      PaymentScheduleLines<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PaymentSchedulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PAYMENT_SCHEDULE: new OneToOneLink('PaymentSchedule', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PaymentScheduleLines;

  requestBuilder(): PaymentScheduleLinesRequestBuilder<DeSerializersT> {
    return new PaymentScheduleLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentScheduleLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentScheduleLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PaymentScheduleLines<DeSerializersT>,
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
    typeof PaymentScheduleLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentScheduleLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      PaymentScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PaymentScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIODS_AFTER_DUE_DATE: OrderableEdmTypeField<
      PaymentScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERCENT_OR_AMOUNT_VALUE: OrderableEdmTypeField<
      PaymentScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT_OR_AMOUNT: EnumField<
      PaymentScheduleLines<DeSerializers>,
      DeSerializersT,
      PercentAmount,
      true,
      true
    >;
    IS_SHIPPING_LINE: EnumField<
      PaymentScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      PaymentScheduleLines<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentScheduleLines<DeSerializers>>;
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
         * Static representation of the {@link paymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentScheduleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodsAfterDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODS_AFTER_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodsAfterDueDate',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link percentOrAmountValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_OR_AMOUNT_VALUE: fieldBuilder.buildEdmTypeField(
          'PercentOrAmountValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentOrAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_OR_AMOUNT: fieldBuilder.buildEnumField(
          'PercentOrAmount',
          PercentAmount,
          true
        ),
        /**
         * Static representation of the {@link isShippingLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIPPING_LINE: fieldBuilder.buildEnumField(
          'IsShippingLine',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentScheduleLines)
      };
    }

    return this._schema;
  }
}
