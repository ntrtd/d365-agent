/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeRequestDependencies } from './EngineeringChangeRequestDependencies';
import { EngineeringChangeRequestDependenciesRequestBuilder } from './EngineeringChangeRequestDependenciesRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { EngineeringChangeRequestHeadersApi } from './EngineeringChangeRequestHeadersApi';
import { EngineeringChangeRequestDependencyActionsApi } from './EngineeringChangeRequestDependencyActionsApi';
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
export class EngineeringChangeRequestDependenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeRequestDependencies<DeSerializersT>,
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
  ): EngineeringChangeRequestDependenciesApi<DeSerializersT> {
    return new EngineeringChangeRequestDependenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dependentProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPENDENT_PRODUCT: OneToOneLink<
      EngineeringChangeRequestDependencies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeRequestHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_HEADER: OneToOneLink<
      EngineeringChangeRequestDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestDependencyActions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCY_ACTIONS: OneToManyLink<
      EngineeringChangeRequestDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependencyActionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductsV2Api<DeSerializersT>,
      EngineeringChangeRequestHeadersApi<DeSerializersT>,
      EngineeringChangeRequestDependencyActionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEPENDENT_PRODUCT: new OneToOneLink(
        'DependentProduct',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_REQUEST_HEADER: new OneToOneLink(
        'EngineeringChangeRequestHeader',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_REQUEST_DEPENDENCY_ACTIONS: new OneToManyLink(
        'EngineeringChangeRequestDependencyActions',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeRequestDependencies;

  requestBuilder(): EngineeringChangeRequestDependenciesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeRequestDependenciesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeRequestDependencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeRequestDependencies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeRequestDependencies<DeSerializersT>,
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
    typeof EngineeringChangeRequestDependencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeRequestDependencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEPENDENT_PRODUCT_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENCY_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EngineeringChangeRequestDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENCY_TRANSACTION_DESCRIPTION: OrderableEdmTypeField<
      EngineeringChangeRequestDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_REQUEST_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestDependencies<DeSerializers>,
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
      EngineeringChangeRequestDependencies<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeRequestHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_HEADER: OneToOneLink<
      EngineeringChangeRequestDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeRequestDependencyActions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCY_ACTIONS: OneToManyLink<
      EngineeringChangeRequestDependencies<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependencyActionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeRequestDependencies<DeSerializers>>;
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
         * Static representation of the {@link engineeringChangeRequestNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_REQUEST_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeRequestNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeRequestDependencies)
      };
    }

    return this._schema;
  }
}
