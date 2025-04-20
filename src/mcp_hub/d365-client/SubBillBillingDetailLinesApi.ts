/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillBillingDetailLines } from './SubBillBillingDetailLines';
import { SubBillBillingDetailLinesRequestBuilder } from './SubBillBillingDetailLinesRequestBuilder';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
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
export class SubBillBillingDetailLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillBillingDetailLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillBillingDetailLinesApi<DeSerializersT> {
    return new SubBillBillingDetailLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillBillingDetailLines;

  requestBuilder(): SubBillBillingDetailLinesRequestBuilder<DeSerializersT> {
    return new SubBillBillingDetailLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillBillingDetailLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillBillingDetailLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillBillingDetailLines<DeSerializersT>,
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
    typeof SubBillBillingDetailLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillBillingDetailLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USAGE_IDENTIFIER: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_START_DATE: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_END_DATE: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_READING_OPTION: EnumField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      SubBillUsageReadingOption,
      true,
      true
    >;
    ESTIMATED_QTY: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_READING: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMED_QUANTITY: OrderableEdmTypeField<
      SubBillBillingDetailLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillBillingDetailLines<DeSerializers>>;
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
         * Static representation of the {@link scheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link usageIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'UsageIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_START_DATE: fieldBuilder.buildEdmTypeField(
          'BillingStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_END_DATE: fieldBuilder.buildEdmTypeField(
          'BillingEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usageReadingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_READING_OPTION: fieldBuilder.buildEnumField(
          'UsageReadingOption',
          SubBillUsageReadingOption,
          true
        ),
        /**
         * Static representation of the {@link estimatedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_QTY: fieldBuilder.buildEdmTypeField(
          'EstimatedQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currentReading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_READING: fieldBuilder.buildEdmTypeField(
          'CurrentReading',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConsumedQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillBillingDetailLines)
      };
    }

    return this._schema;
  }
}
