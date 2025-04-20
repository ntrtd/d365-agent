/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditManagementAccountStatuses } from './CreditManagementAccountStatuses';
import { CreditManagementAccountStatusesRequestBuilder } from './CreditManagementAccountStatusesRequestBuilder';
import { CredManAccountHeldType } from './CredManAccountHeldType';
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
export class CreditManagementAccountStatusesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CreditManagementAccountStatuses<DeSerializersT>, DeSerializersT>
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
  ): CreditManagementAccountStatusesApi<DeSerializersT> {
    return new CreditManagementAccountStatusesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditManagementAccountStatuses;

  requestBuilder(): CreditManagementAccountStatusesRequestBuilder<DeSerializersT> {
    return new CreditManagementAccountStatusesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CreditManagementAccountStatuses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CreditManagementAccountStatuses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditManagementAccountStatuses<DeSerializersT>,
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
    typeof CreditManagementAccountStatuses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditManagementAccountStatuses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditManagementAccountStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_ACCOUNT_STATUS_ID: OrderableEdmTypeField<
      CreditManagementAccountStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_ACCOUNT_STATUS_DESCRIPTION: OrderableEdmTypeField<
      CreditManagementAccountStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_BLOCKED: EnumField<
      CreditManagementAccountStatuses<DeSerializers>,
      DeSerializersT,
      CredManAccountHeldType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CreditManagementAccountStatuses<DeSerializers>>;
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
         * Static representation of the {@link custAccountStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'CustAccountStatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link custAccountStatusDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT_STATUS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CustAccountStatusDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_BLOCKED: fieldBuilder.buildEnumField(
          'CustBlocked',
          CredManAccountHeldType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditManagementAccountStatuses)
      };
    }

    return this._schema;
  }
}
