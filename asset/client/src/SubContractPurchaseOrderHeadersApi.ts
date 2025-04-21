/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubContractPurchaseOrderHeaders } from './SubContractPurchaseOrderHeaders';
import { SubContractPurchaseOrderHeadersRequestBuilder } from './SubContractPurchaseOrderHeadersRequestBuilder';
import { ProjSubConState } from './ProjSubConState';
import { PurchStatus } from './PurchStatus';
import { ProjSubconStatus } from './ProjSubconStatus';
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
export class SubContractPurchaseOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubContractPurchaseOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): SubContractPurchaseOrderHeadersApi<DeSerializersT> {
    return new SubContractPurchaseOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubContractPurchaseOrderHeaders;

  requestBuilder(): SubContractPurchaseOrderHeadersRequestBuilder<DeSerializersT> {
    return new SubContractPurchaseOrderHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubContractPurchaseOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubContractPurchaseOrderHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubContractPurchaseOrderHeaders<DeSerializersT>,
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
    typeof SubContractPurchaseOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubContractPurchaseOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_SUB_CONTRACT_NUMBER: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUB_CON_STATE: EnumField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProjSubConState,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CON_DATE: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCH_STATUS: EnumField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_CON_STATUS: EnumField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProjSubconStatus,
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CON_NAME: OrderableEdmTypeField<
      SubContractPurchaseOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubContractPurchaseOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link projSubContractNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SUB_CONTRACT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjSubContractNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subConState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_STATE: fieldBuilder.buildEnumField(
          'SubConState',
          ProjSubConState,
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link subConDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_DATE: fieldBuilder.buildEdmTypeField(
          'SubConDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_STATUS: fieldBuilder.buildEnumField(
          'PurchStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subConStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_STATUS: fieldBuilder.buildEnumField(
          'SubConStatus',
          ProjSubconStatus,
          true
        ),
        /**
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subConName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_NAME: fieldBuilder.buildEdmTypeField(
          'SubConName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubContractPurchaseOrderHeaders)
      };
    }

    return this._schema;
  }
}
