/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalIdToCustomerMaps } from './ExternalIdToCustomerMaps';
import { ExternalIdToCustomerMapsRequestBuilder } from './ExternalIdToCustomerMapsRequestBuilder';
import { NoYes } from './NoYes';
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
export class ExternalIdToCustomerMapsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalIdToCustomerMaps<DeSerializersT>, DeSerializersT>
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
  ): ExternalIdToCustomerMapsApi<DeSerializersT> {
    return new ExternalIdToCustomerMapsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExternalIdToCustomerMaps;

  requestBuilder(): ExternalIdToCustomerMapsRequestBuilder<DeSerializersT> {
    return new ExternalIdToCustomerMapsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalIdToCustomerMaps<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalIdToCustomerMaps<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalIdToCustomerMaps<DeSerializersT>,
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
    typeof ExternalIdToCustomerMaps,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalIdToCustomerMaps,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExternalIdToCustomerMaps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_IDENTITY_ID: OrderableEdmTypeField<
      ExternalIdToCustomerMaps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROVIDER_ID: OrderableEdmTypeField<
      ExternalIdToCustomerMaps<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_ACTIVATED: EnumField<
      ExternalIdToCustomerMaps<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ExternalIdToCustomerMaps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AUTO_LINKED: EnumField<
      ExternalIdToCustomerMaps<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExternalIdToCustomerMaps<DeSerializers>>;
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
         * Static representation of the {@link externalIdentityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_IDENTITY_ID: fieldBuilder.buildEdmTypeField(
          'ExternalIdentityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link providerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVIDER_ID: fieldBuilder.buildEdmTypeField(
          'ProviderId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isActivated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVATED: fieldBuilder.buildEnumField('IsActivated', NoYes, true),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAutoLinked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTO_LINKED: fieldBuilder.buildEnumField(
          'IsAutoLinked',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalIdToCustomerMaps)
      };
    }

    return this._schema;
  }
}
