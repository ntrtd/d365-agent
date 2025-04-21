/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralScheduleLines } from './SubBillDeferralScheduleLines';
import { SubBillDeferralScheduleLinesRequestBuilder } from './SubBillDeferralScheduleLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SubBillDeferralScheduleLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralScheduleLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralScheduleLinesApi<DeSerializersT> {
    return new SubBillDeferralScheduleLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralScheduleLines;

  requestBuilder(): SubBillDeferralScheduleLinesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralScheduleLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralScheduleLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralScheduleLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralScheduleLines<DeSerializersT>,
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
    typeof SubBillDeferralScheduleLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralScheduleLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRAL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EVENT_DESCRIPTION: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETION_PERCENTAGE: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOCATION_PERCENTAGE: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      SubBillDeferralScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralScheduleLines<DeSerializers>>;
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
         * Static representation of the {@link deferralScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeferralScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link eventDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EventDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognitionAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RecognitionAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CompletionPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link allocationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllocationPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferralEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'DeferralEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralScheduleLines)
      };
    }

    return this._schema;
  }
}
