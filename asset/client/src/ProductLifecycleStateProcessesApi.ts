/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductLifecycleStateProcesses } from './ProductLifecycleStateProcesses';
import { ProductLifecycleStateProcessesRequestBuilder } from './ProductLifecycleStateProcessesRequestBuilder';
import { ProductLifecycleStatesApi } from './ProductLifecycleStatesApi';
import { EngChgReadinessModule } from './EngChgReadinessModule';
import { EngChgEcoResStateBlockRule } from './EngChgEcoResStateBlockRule';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductLifecycleStateProcessesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductLifecycleStateProcesses<DeSerializersT>, DeSerializersT>
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
  ): ProductLifecycleStateProcessesApi<DeSerializersT> {
    return new ProductLifecycleStateProcessesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      ProductLifecycleStateProcesses<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductLifecycleStatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_LIFECYCLE_STATE: new OneToOneLink(
        'ProductLifecycleState',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductLifecycleStateProcesses;

  requestBuilder(): ProductLifecycleStateProcessesRequestBuilder<DeSerializersT> {
    return new ProductLifecycleStateProcessesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductLifecycleStateProcesses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductLifecycleStateProcesses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductLifecycleStateProcesses<DeSerializersT>,
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
    typeof ProductLifecycleStateProcesses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductLifecycleStateProcesses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      ProductLifecycleStateProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS_NAME: OrderableEdmTypeField<
      ProductLifecycleStateProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICABLE_PROCESS_AREA: EnumField<
      ProductLifecycleStateProcesses<DeSerializers>,
      DeSerializersT,
      EngChgReadinessModule,
      true,
      true
    >;
    PROCESS_POLICY: EnumField<
      ProductLifecycleStateProcesses<DeSerializers>,
      DeSerializersT,
      EngChgEcoResStateBlockRule,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      ProductLifecycleStateProcesses<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductLifecycleStateProcesses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ProductLifecycleStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link processName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_NAME: fieldBuilder.buildEdmTypeField(
          'ProcessName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link applicableProcessArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICABLE_PROCESS_AREA: fieldBuilder.buildEnumField(
          'ApplicableProcessArea',
          EngChgReadinessModule,
          true
        ),
        /**
         * Static representation of the {@link processPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_POLICY: fieldBuilder.buildEnumField(
          'ProcessPolicy',
          EngChgEcoResStateBlockRule,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductLifecycleStateProcesses)
      };
    }

    return this._schema;
  }
}
