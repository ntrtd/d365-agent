/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTillLayoutStaffs } from './RetailTillLayoutStaffs';
import { RetailTillLayoutStaffsRequestBuilder } from './RetailTillLayoutStaffsRequestBuilder';
import { RetailTillLayoutsApi } from './RetailTillLayoutsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTillLayoutStaffsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTillLayoutStaffs<DeSerializersT>, DeSerializersT>
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
  ): RetailTillLayoutStaffsApi<DeSerializersT> {
    return new RetailTillLayoutStaffsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailTillLayoutStaffs<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailTillLayoutsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TILL_LAYOUT: new OneToOneLink(
        'RetailTillLayout',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailTillLayoutStaffs;

  requestBuilder(): RetailTillLayoutStaffsRequestBuilder<DeSerializersT> {
    return new RetailTillLayoutStaffsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTillLayoutStaffs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTillLayoutStaffs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTillLayoutStaffs<DeSerializersT>,
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
    typeof RetailTillLayoutStaffs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTillLayoutStaffs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailTillLayoutStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STAFF_ID: OrderableEdmTypeField<
      RetailTillLayoutStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailTillLayoutStaffs<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTillLayoutStaffs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link staffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_ID: fieldBuilder.buildEdmTypeField(
          'StaffId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTillLayoutStaffs)
      };
    }

    return this._schema;
  }
}
