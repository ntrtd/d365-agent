/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeCustomerApprovalTypes } from './EngineeringChangeCustomerApprovalTypes';
import { EngineeringChangeCustomerApprovalTypesRequestBuilder } from './EngineeringChangeCustomerApprovalTypesRequestBuilder';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
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
export class EngineeringChangeCustomerApprovalTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
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
  ): EngineeringChangeCustomerApprovalTypesApi<DeSerializersT> {
    return new EngineeringChangeCustomerApprovalTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductsV3Api<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: new OneToManyLink(
        'EngineeringChangeOrderProductsV3',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: new OneToManyLink(
        'EngineeringChangeOrderProductsV2',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS: new OneToManyLink(
        'EngineeringChangeOrderProducts',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeCustomerApprovalTypes;

  requestBuilder(): EngineeringChangeCustomerApprovalTypesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeCustomerApprovalTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
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
    typeof EngineeringChangeCustomerApprovalTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeCustomerApprovalTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE_NAME: OrderableEdmTypeField<
      EngineeringChangeCustomerApprovalTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      EngineeringChangeCustomerApprovalTypes<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeCustomerApprovalTypes<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link typeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TypeName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeCustomerApprovalTypes)
      };
    }

    return this._schema;
  }
}
