/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailKits } from './RetailKits';
import { RetailKitsRequestBuilder } from './RetailKitsRequestBuilder';
import { RetailKitOrdersApi } from './RetailKitOrdersApi';
import { RetailKitComponentsApi } from './RetailKitComponentsApi';
import { RetailKitStatus } from './RetailKitStatus';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailKitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailKits<DeSerializersT>, DeSerializersT>
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
  ): RetailKitsApi<DeSerializersT> {
    return new RetailKitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailKitOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_ORDER: OneToManyLink<
      RetailKits<DeSerializersT>,
      DeSerializersT,
      RetailKitOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToManyLink<
      RetailKits<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailKitOrdersApi<DeSerializersT>,
      RetailKitComponentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_KIT_ORDER: new OneToManyLink(
        'RetailKitOrder',
        this,
        linkedApis[0]
      ),
      RETAIL_KIT_COMPONENT: new OneToManyLink(
        'RetailKitComponent',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailKits;

  requestBuilder(): RetailKitsRequestBuilder<DeSerializersT> {
    return new RetailKitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailKits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailKits<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailKits<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailKits, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailKits, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      RetailKits<DeSerializers>,
      DeSerializersT,
      RetailKitStatus,
      true,
      true
    >;
    DISASSEMBLY_AT_REGISTER_ALLOWED: EnumField<
      RetailKits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCONTINUE_KIT: EnumField<
      RetailKits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_ORDER: OneToManyLink<
      RetailKits<DeSerializersT>,
      DeSerializersT,
      RetailKitOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToManyLink<
      RetailKits<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailKits<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link kitProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', RetailKitStatus, true),
        /**
         * Static representation of the {@link disassemblyAtRegisterAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISASSEMBLY_AT_REGISTER_ALLOWED: fieldBuilder.buildEnumField(
          'DisassemblyAtRegisterAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discontinueKit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCONTINUE_KIT: fieldBuilder.buildEnumField(
          'DiscontinueKit',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailKits)
      };
    }

    return this._schema;
  }
}
