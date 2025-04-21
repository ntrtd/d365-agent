/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTmpCustomerMedias } from './RetailTmpCustomerMedias';
import { RetailTmpCustomerMediasRequestBuilder } from './RetailTmpCustomerMediasRequestBuilder';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';
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
export class RetailTmpCustomerMediasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTmpCustomerMedias<DeSerializersT>, DeSerializersT>
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
  ): RetailTmpCustomerMediasApi<DeSerializersT> {
    return new RetailTmpCustomerMediasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTmpCustomerMedias;

  requestBuilder(): RetailTmpCustomerMediasRequestBuilder<DeSerializersT> {
    return new RetailTmpCustomerMediasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTmpCustomerMedias<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTmpCustomerMedias<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTmpCustomerMedias<DeSerializersT>,
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
    typeof RetailTmpCustomerMedias,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTmpCustomerMedias,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSOCIATION_STATUS: EnumField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      RetailMediaAssociationStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      RetailTmpCustomerMedias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTmpCustomerMedias<DeSerializers>>;
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
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link associationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATION_STATUS: fieldBuilder.buildEnumField(
          'AssociationStatus',
          RetailMediaAssociationStatus,
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
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTmpCustomerMedias)
      };
    }

    return this._schema;
  }
}
