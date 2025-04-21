/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderDependencies } from './EngineeringChangeOrderDependencies';
import { EngineeringChangeOrderDependenciesRequestBuilder } from './EngineeringChangeOrderDependenciesRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { EngineeringChangeOrderHeadersApi } from './EngineeringChangeOrderHeadersApi';
import { EngineeringChangeOrderDependencyActionsApi } from './EngineeringChangeOrderDependencyActionsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderDependenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderDependencies<DeSerializersT>,
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
  ): EngineeringChangeOrderDependenciesApi<DeSerializersT> {
    return new EngineeringChangeOrderDependenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dependentProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPENDENT_PRODUCT: OneToOneLink<
      EngineeringChangeOrderDependencies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADER: OneToOneLink<
      EngineeringChangeOrderDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderDependencyActions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_DEPENDENCY_ACTIONS: OneToManyLink<
      EngineeringChangeOrderDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderDependencyActionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderHeadersApi<DeSerializersT>,
      EngineeringChangeOrderDependencyActionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEPENDENT_PRODUCT: new OneToOneLink(
        'DependentProduct',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_HEADER: new OneToOneLink(
        'EngineeringChangeOrderHeader',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_ORDER_DEPENDENCY_ACTIONS: new OneToManyLink(
        'EngineeringChangeOrderDependencyActions',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderDependencies;

  requestBuilder(): EngineeringChangeOrderDependenciesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderDependenciesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderDependencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderDependencies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderDependencies<DeSerializersT>,
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
    typeof EngineeringChangeOrderDependencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderDependencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEPENDENT_PRODUCT_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENCY_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENCY_TRANSACTION_DESCRIPTION: OrderableEdmTypeField<
      EngineeringChangeOrderDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dependentProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPENDENT_PRODUCT: OneToOneLink<
      EngineeringChangeOrderDependencies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADER: OneToOneLink<
      EngineeringChangeOrderDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderDependencyActions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_DEPENDENCY_ACTIONS: OneToManyLink<
      EngineeringChangeOrderDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderDependencyActionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeOrderDependencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dependentProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DependentProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dependencyLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENCY_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'DependencyLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dependencyTransactionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENCY_TRANSACTION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DependencyTransactionDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeOrderDependencies)
      };
    }

    return this._schema;
  }
}
