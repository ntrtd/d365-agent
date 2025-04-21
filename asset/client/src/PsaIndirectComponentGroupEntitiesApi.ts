/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PsaIndirectComponentGroupEntities } from './PsaIndirectComponentGroupEntities';
import { PsaIndirectComponentGroupEntitiesRequestBuilder } from './PsaIndirectComponentGroupEntitiesRequestBuilder';
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
export class PsaIndirectComponentGroupEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PsaIndirectComponentGroupEntities<DeSerializersT>, DeSerializersT>
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
  ): PsaIndirectComponentGroupEntitiesApi<DeSerializersT> {
    return new PsaIndirectComponentGroupEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PsaIndirectComponentGroupEntities;

  requestBuilder(): PsaIndirectComponentGroupEntitiesRequestBuilder<DeSerializersT> {
    return new PsaIndirectComponentGroupEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PsaIndirectComponentGroupEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PsaIndirectComponentGroupEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PsaIndirectComponentGroupEntities<DeSerializersT>,
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
    typeof PsaIndirectComponentGroupEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PsaIndirectComponentGroupEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PsaIndirectComponentGroupEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDIRECT_COST_COMPONENT_GROUP: OrderableEdmTypeField<
      PsaIndirectComponentGroupEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDIRECT_COMPONENT_GROUP_NAME: OrderableEdmTypeField<
      PsaIndirectComponentGroupEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PsaIndirectComponentGroupEntities<DeSerializers>>;
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
         * Static representation of the {@link indirectCostComponentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_COST_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField(
          'IndirectCostComponentGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link indirectComponentGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_COMPONENT_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'IndirectComponentGroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PsaIndirectComponentGroupEntities)
      };
    }

    return this._schema;
  }
}
