/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillMassTerminationRemovalLines } from './SubBillMassTerminationRemovalLines';
import { SubBillMassTerminationRemovalLinesRequestBuilder } from './SubBillMassTerminationRemovalLinesRequestBuilder';
import { SubBillInvTransType } from './SubBillInvTransType';
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
export class SubBillMassTerminationRemovalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillMassTerminationRemovalLines<DeSerializersT>,
      DeSerializersT
    >
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
  ): SubBillMassTerminationRemovalLinesApi<DeSerializersT> {
    return new SubBillMassTerminationRemovalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillMassTerminationRemovalLines;

  requestBuilder(): SubBillMassTerminationRemovalLinesRequestBuilder<DeSerializersT> {
    return new SubBillMassTerminationRemovalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillMassTerminationRemovalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillMassTerminationRemovalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillMassTerminationRemovalLines<DeSerializersT>,
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
    typeof SubBillMassTerminationRemovalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillMassTerminationRemovalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillMassTerminationRemovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillMassTerminationRemovalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_TRANSACTION_TYPE: EnumField<
      SubBillMassTerminationRemovalLines<DeSerializers>,
      DeSerializersT,
      SubBillInvTransType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillMassTerminationRemovalLines<DeSerializers>>;
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
         * Static representation of the {@link billingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillingScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'InvoiceTransactionType',
          SubBillInvTransType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillMassTerminationRemovalLines)
      };
    }

    return this._schema;
  }
}
