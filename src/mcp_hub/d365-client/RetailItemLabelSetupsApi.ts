/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailItemLabelSetups } from './RetailItemLabelSetups';
import { RetailItemLabelSetupsRequestBuilder } from './RetailItemLabelSetupsRequestBuilder';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';
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
export class RetailItemLabelSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailItemLabelSetups<DeSerializersT>, DeSerializersT>
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
  ): RetailItemLabelSetupsApi<DeSerializersT> {
    return new RetailItemLabelSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailItemLabelSetups;

  requestBuilder(): RetailItemLabelSetupsRequestBuilder<DeSerializersT> {
    return new RetailItemLabelSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailItemLabelSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailItemLabelSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailItemLabelSetups<DeSerializersT>,
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
    typeof RetailItemLabelSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailItemLabelSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LABEL_TYPE: EnumField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      RetailLabelTypeBase,
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_1_IS_ITEM_DESCRIPTION: EnumField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEXT_1: OrderableEdmTypeField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT_2: OrderableEdmTypeField<
      RetailItemLabelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailItemLabelSetups<DeSerializers>>;
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
         * Static representation of the {@link labelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_TYPE: fieldBuilder.buildEnumField(
          'LabelType',
          RetailLabelTypeBase,
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link organizationHierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationHierarchyTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reportName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_NAME: fieldBuilder.buildEdmTypeField(
          'ReportName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link text1IsItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_1_IS_ITEM_DESCRIPTION: fieldBuilder.buildEnumField(
          'Text1IsItemDescription',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link text1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_1: fieldBuilder.buildEdmTypeField('Text1', 'Edm.String', true),
        /**
         * Static representation of the {@link text2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_2: fieldBuilder.buildEdmTypeField('Text2', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailItemLabelSetups)
      };
    }

    return this._schema;
  }
}
