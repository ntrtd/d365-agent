/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoicePackingSlipQuantityMatchBiEntities } from './VendInvoicePackingSlipQuantityMatchBiEntities';
import { VendInvoicePackingSlipQuantityMatchBiEntitiesRequestBuilder } from './VendInvoicePackingSlipQuantityMatchBiEntitiesRequestBuilder';
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
export class VendInvoicePackingSlipQuantityMatchBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializersT>,
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
  ): VendInvoicePackingSlipQuantityMatchBiEntitiesApi<DeSerializersT> {
    return new VendInvoicePackingSlipQuantityMatchBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoicePackingSlipQuantityMatchBiEntities;

  requestBuilder(): VendInvoicePackingSlipQuantityMatchBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendInvoicePackingSlipQuantityMatchBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializersT>,
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
    typeof VendInvoicePackingSlipQuantityMatchBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoicePackingSlipQuantityMatchBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INVOICE_SOURCE_DOCUMENT_L_INE: OrderableEdmTypeField<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PACKING_SLIP_SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENT_QUANTITY: OrderableEdmTypeField<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PDS_CW_QUANTITY: OrderableEdmTypeField<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      VendInvoicePackingSlipQuantityMatchBiEntities<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link invoiceSourceDocumentLIne} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SOURCE_DOCUMENT_L_INE: fieldBuilder.buildEdmTypeField(
          'InvoiceSourceDocumentLIne',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link packingSlipSourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'PackingSlipSourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link inventQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InventQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pdsCwQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PdsCWQuantity',
          'Edm.Decimal',
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
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          VendInvoicePackingSlipQuantityMatchBiEntities
        )
      };
    }

    return this._schema;
  }
}
