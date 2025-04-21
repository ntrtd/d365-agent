/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteProjectPartitionMappings } from './DualWriteProjectPartitionMappings';
import { DualWriteProjectPartitionMappingsRequestBuilder } from './DualWriteProjectPartitionMappingsRequestBuilder';
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
export class DualWriteProjectPartitionMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DualWriteProjectPartitionMappings<DeSerializersT>, DeSerializersT>
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
  ): DualWriteProjectPartitionMappingsApi<DeSerializersT> {
    return new DualWriteProjectPartitionMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DualWriteProjectPartitionMappings;

  requestBuilder(): DualWriteProjectPartitionMappingsRequestBuilder<DeSerializersT> {
    return new DualWriteProjectPartitionMappingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DualWriteProjectPartitionMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DualWriteProjectPartitionMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteProjectPartitionMappings<DeSerializersT>,
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
    typeof DualWriteProjectPartitionMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteProjectPartitionMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROJECT_NAME: OrderableEdmTypeField<
      DualWriteProjectPartitionMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_COMPANY_NAME: OrderableEdmTypeField<
      DualWriteProjectPartitionMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_COMPANY_NAME: OrderableEdmTypeField<
      DualWriteProjectPartitionMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DualWriteProjectPartitionMappings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link externalCompanyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'ExternalCompanyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internalCompanyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'InternalCompanyName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DualWriteProjectPartitionMappings)
      };
    }

    return this._schema;
  }
}
