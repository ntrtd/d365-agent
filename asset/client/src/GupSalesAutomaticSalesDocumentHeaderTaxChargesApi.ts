/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GupSalesAutomaticSalesDocumentHeaderTaxCharges } from './GupSalesAutomaticSalesDocumentHeaderTaxCharges';
import { GupSalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder } from './GupSalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder';
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
export class GupSalesAutomaticSalesDocumentHeaderTaxChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
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
  ): GupSalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT> {
    return new GupSalesAutomaticSalesDocumentHeaderTaxChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GupSalesAutomaticSalesDocumentHeaderTaxCharges;

  requestBuilder(): GupSalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder<DeSerializersT> {
    return new GupSalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
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
    typeof GupSalesAutomaticSalesDocumentHeaderTaxCharges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GupSalesAutomaticSalesDocumentHeaderTaxCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>
    >;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField(
          'TaxCode',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          GupSalesAutomaticSalesDocumentHeaderTaxCharges
        )
      };
    }

    return this._schema;
  }
}
