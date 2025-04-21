/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NgpCodes } from './NgpCodes';
import { NgpCodesRequestBuilder } from './NgpCodesRequestBuilder';
import { FreeTextInvoiceLinesApi } from './FreeTextInvoiceLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class NgpCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NgpCodes<DeSerializersT>, DeSerializersT>
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
  ): NgpCodesApi<DeSerializersT> {
    return new NgpCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceLineNgp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_NGP: OneToManyLink<
      NgpCodes<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FreeTextInvoiceLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FREE_TEXT_INVOICE_LINE_NGP: new OneToManyLink(
        'FreeTextInvoiceLineNGP',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = NgpCodes;

  requestBuilder(): NgpCodesRequestBuilder<DeSerializersT> {
    return new NgpCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<NgpCodes<DeSerializersT>, DeSerializersT> {
    return entityBuilder<NgpCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NgpCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NgpCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NgpCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      NgpCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NGP: OrderableEdmTypeField<
      NgpCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NgpCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceLineNgp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_LINE_NGP: OneToManyLink<
      NgpCodes<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<NgpCodes<DeSerializers>>;
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
         * Static representation of the {@link ngp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP: fieldBuilder.buildEdmTypeField('NGP', 'Edm.Int32', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NgpCodes)
      };
    }

    return this._schema;
  }
}
