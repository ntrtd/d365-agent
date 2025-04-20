/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxHierarchies } from './SalesTaxHierarchies';
import { SalesTaxHierarchiesRequestBuilder } from './SalesTaxHierarchiesRequestBuilder';
import { TaxReportHrchyStructDesignTypeIn } from './TaxReportHrchyStructDesignTypeIn';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SalesTaxHierarchiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTaxHierarchies<DeSerializersT>, DeSerializersT>
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
  ): SalesTaxHierarchiesApi<DeSerializersT> {
    return new SalesTaxHierarchiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesTaxHierarchies;

  requestBuilder(): SalesTaxHierarchiesRequestBuilder<DeSerializersT> {
    return new SalesTaxHierarchiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTaxHierarchies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesTaxHierarchies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTaxHierarchies<DeSerializersT>,
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
    typeof SalesTaxHierarchies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTaxHierarchies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIERARCHY_NAME: OrderableEdmTypeField<
      SalesTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIERARCHY_VERSION: OrderableEdmTypeField<
      SalesTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HIERARCHY_STRUCTURE: EnumField<
      SalesTaxHierarchies<DeSerializers>,
      DeSerializersT,
      TaxReportHrchyStructDesignTypeIn,
      true,
      true
    >;
    IS_ACTIVE_VERSION: EnumField<
      SalesTaxHierarchies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HIERARCHY_VERSION_DESCRIPTION: OrderableEdmTypeField<
      SalesTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SETOFFABLE: EnumField<
      SalesTaxHierarchies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesTaxHierarchies<DeSerializers>>;
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
         * Static representation of the {@link hierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hierarchyVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_VERSION: fieldBuilder.buildEdmTypeField(
          'HierarchyVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link hierarchyStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_STRUCTURE: fieldBuilder.buildEnumField(
          'HierarchyStructure',
          TaxReportHrchyStructDesignTypeIn,
          true
        ),
        /**
         * Static representation of the {@link isActiveVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE_VERSION: fieldBuilder.buildEnumField(
          'IsActiveVersion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hierarchyVersionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_VERSION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'HierarchyVersionDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSetoffable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SETOFFABLE: fieldBuilder.buildEnumField('IsSetoffable', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTaxHierarchies)
      };
    }

    return this._schema;
  }
}
