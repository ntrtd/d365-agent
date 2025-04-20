/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderOriginCodes } from './SalesOrderOriginCodes';
import { SalesOrderOriginCodesRequestBuilder } from './SalesOrderOriginCodesRequestBuilder';
import { SalesInvoiceHeadersV4Api } from './SalesInvoiceHeadersV4Api';
import { SalesOrderHeadersV4Api } from './SalesOrderHeadersV4Api';
import { NoYes } from './NoYes';
import { SalesOriginType } from './SalesOriginType';
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
export class SalesOrderOriginCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderOriginCodes<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderOriginCodesApi<DeSerializersT> {
    return new SalesOrderOriginCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_INVOICE_HEADERS: OneToManyLink<
      SalesOrderOriginCodes<DeSerializersT>,
      DeSerializersT,
      SalesInvoiceHeadersV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADERS: OneToManyLink<
      SalesOrderOriginCodes<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV4Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesInvoiceHeadersV4Api<DeSerializersT>,
      SalesOrderHeadersV4Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_INVOICE_HEADERS: new OneToManyLink(
        'SalesInvoiceHeaders',
        this,
        linkedApis[0]
      ),
      SALES_ORDER_HEADERS: new OneToManyLink(
        'SalesOrderHeaders',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SalesOrderOriginCodes;

  requestBuilder(): SalesOrderOriginCodesRequestBuilder<DeSerializersT> {
    return new SalesOrderOriginCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderOriginCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderOriginCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderOriginCodes<DeSerializersT>,
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
    typeof SalesOrderOriginCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderOriginCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesOrderOriginCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIGIN_CODE: OrderableEdmTypeField<
      SalesOrderOriginCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIGIN_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderOriginCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ORIGIN_TYPE_ASSIGNED: EnumField<
      SalesOrderOriginCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGIN_TYPE: EnumField<
      SalesOrderOriginCodes<DeSerializers>,
      DeSerializersT,
      SalesOriginType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_INVOICE_HEADERS: OneToManyLink<
      SalesOrderOriginCodes<DeSerializersT>,
      DeSerializersT,
      SalesInvoiceHeadersV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADERS: OneToManyLink<
      SalesOrderOriginCodes<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV4Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderOriginCodes<DeSerializers>>;
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
         * Static representation of the {@link originCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_CODE: fieldBuilder.buildEdmTypeField(
          'OriginCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link originDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'OriginDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOriginTypeAssigned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORIGIN_TYPE_ASSIGNED: fieldBuilder.buildEnumField(
          'IsOriginTypeAssigned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link originType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'OriginType',
          SalesOriginType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderOriginCodes)
      };
    }

    return this._schema;
  }
}
