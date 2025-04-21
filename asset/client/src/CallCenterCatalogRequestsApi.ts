/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterCatalogRequests } from './CallCenterCatalogRequests';
import { CallCenterCatalogRequestsRequestBuilder } from './CallCenterCatalogRequestsRequestBuilder';
import { McrCatalogStatus } from './McrCatalogStatus';
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
export class CallCenterCatalogRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CallCenterCatalogRequests<DeSerializersT>, DeSerializersT>
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
  ): CallCenterCatalogRequestsApi<DeSerializersT> {
    return new CallCenterCatalogRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterCatalogRequests;

  requestBuilder(): CallCenterCatalogRequestsRequestBuilder<DeSerializersT> {
    return new CallCenterCatalogRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CallCenterCatalogRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CallCenterCatalogRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CallCenterCatalogRequests<DeSerializersT>,
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
    typeof CallCenterCatalogRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterCatalogRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATALOG_DESCRIPTION: OrderableEdmTypeField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATALOG_REQUEST_NUMBER: OrderableEdmTypeField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOG_ID: OrderableEdmTypeField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_RELATION_ACCOUNT: OrderableEdmTypeField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_STATUS: EnumField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      McrCatalogStatus,
      true,
      true
    >;
    SOURCE_CODE: OrderableEdmTypeField<
      CallCenterCatalogRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterCatalogRequests<DeSerializers>>;
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
         * Static representation of the {@link catalogDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CatalogDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link catalogRequestNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_REQUEST_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogRequestNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link logId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_ID: fieldBuilder.buildEdmTypeField('LogId', 'Edm.String', true),
        /**
         * Static representation of the {@link businessRelationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_RELATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BusinessRelationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATUS: fieldBuilder.buildEnumField(
          'RequestStatus',
          McrCatalogStatus,
          true
        ),
        /**
         * Static representation of the {@link sourceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CODE: fieldBuilder.buildEdmTypeField(
          'SourceCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterCatalogRequests)
      };
    }

    return this._schema;
  }
}
