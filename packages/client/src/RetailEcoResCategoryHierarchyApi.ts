/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEcoResCategoryHierarchy } from './RetailEcoResCategoryHierarchy';
import { RetailEcoResCategoryHierarchyRequestBuilder } from './RetailEcoResCategoryHierarchyRequestBuilder';
import { EcoResCategoryHierarchyModifier } from './EcoResCategoryHierarchyModifier';
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
export class RetailEcoResCategoryHierarchyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailEcoResCategoryHierarchy<DeSerializersT>, DeSerializersT>
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
  ): RetailEcoResCategoryHierarchyApi<DeSerializersT> {
    return new RetailEcoResCategoryHierarchyApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEcoResCategoryHierarchy;

  requestBuilder(): RetailEcoResCategoryHierarchyRequestBuilder<DeSerializersT> {
    return new RetailEcoResCategoryHierarchyRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEcoResCategoryHierarchy<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEcoResCategoryHierarchy<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEcoResCategoryHierarchy<DeSerializersT>,
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
    typeof RetailEcoResCategoryHierarchy,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEcoResCategoryHierarchy,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailEcoResCategoryHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AX_REC_ID: OrderableEdmTypeField<
      RetailEcoResCategoryHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HIERARCHY_MODIFIER: EnumField<
      RetailEcoResCategoryHierarchy<DeSerializers>,
      DeSerializersT,
      EcoResCategoryHierarchyModifier,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailEcoResCategoryHierarchy<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link axRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AX_REC_ID: fieldBuilder.buildEdmTypeField(
          'AxRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link hierarchyModifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_MODIFIER: fieldBuilder.buildEnumField(
          'HierarchyModifier',
          EcoResCategoryHierarchyModifier,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEcoResCategoryHierarchy)
      };
    }

    return this._schema;
  }
}
