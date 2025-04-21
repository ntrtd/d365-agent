/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdComponentGroups } from './WithholdComponentGroups';
import { WithholdComponentGroupsRequestBuilder } from './WithholdComponentGroupsRequestBuilder';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
import { TaxWithholdComponentStatusIn } from './TaxWithholdComponentStatusIn';
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
export class WithholdComponentGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdComponentGroups<DeSerializersT>, DeSerializersT>
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
  ): WithholdComponentGroupsApi<DeSerializersT> {
    return new WithholdComponentGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdComponentGroups;

  requestBuilder(): WithholdComponentGroupsRequestBuilder<DeSerializersT> {
    return new WithholdComponentGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdComponentGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WithholdComponentGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdComponentGroups<DeSerializersT>,
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
    typeof WithholdComponentGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdComponentGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdComponentGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdComponentGroups<DeSerializers>,
      DeSerializersT,
      TaxWithholdTypeIn,
      true,
      true
    >;
    WITHHOLDING_TAX_COMPONENT_GROUP: OrderableEdmTypeField<
      WithholdComponentGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      WithholdComponentGroups<DeSerializers>,
      DeSerializersT,
      TaxWithholdComponentStatusIn,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WithholdComponentGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECTION_CODE: OrderableEdmTypeField<
      WithholdComponentGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdComponentGroups<DeSerializers>>;
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
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdTypeIn,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxComponentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxComponentGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          TaxWithholdComponentStatusIn,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sectionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_CODE: fieldBuilder.buildEdmTypeField(
          'SectionCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdComponentGroups)
      };
    }

    return this._schema;
  }
}
