/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailHardwareProfileMerchantsInfo } from './RetailHardwareProfileMerchantsInfo';
import { RetailHardwareProfileMerchantsInfoRequestBuilder } from './RetailHardwareProfileMerchantsInfoRequestBuilder';
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
export class RetailHardwareProfileMerchantsInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailHardwareProfileMerchantsInfo<DeSerializersT>,
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
  ): RetailHardwareProfileMerchantsInfoApi<DeSerializersT> {
    return new RetailHardwareProfileMerchantsInfoApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailHardwareProfileMerchantsInfo;

  requestBuilder(): RetailHardwareProfileMerchantsInfoRequestBuilder<DeSerializersT> {
    return new RetailHardwareProfileMerchantsInfoRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailHardwareProfileMerchantsInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailHardwareProfileMerchantsInfo<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailHardwareProfileMerchantsInfo<DeSerializersT>,
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
    typeof RetailHardwareProfileMerchantsInfo,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailHardwareProfileMerchantsInfo,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROFILE_ID: OrderableEdmTypeField<
      RetailHardwareProfileMerchantsInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MERCHANT_PROPERTIES: OrderableEdmTypeField<
      RetailHardwareProfileMerchantsInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailHardwareProfileMerchantsInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link merchantProperties} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_PROPERTIES: fieldBuilder.buildEdmTypeField(
          'MerchantProperties',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailHardwareProfileMerchantsInfo)
      };
    }

    return this._schema;
  }
}
