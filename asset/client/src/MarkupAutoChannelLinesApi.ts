/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MarkupAutoChannelLines } from './MarkupAutoChannelLines';
import { MarkupAutoChannelLinesRequestBuilder } from './MarkupAutoChannelLinesRequestBuilder';
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
export class MarkupAutoChannelLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MarkupAutoChannelLines<DeSerializersT>, DeSerializersT>
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
  ): MarkupAutoChannelLinesApi<DeSerializersT> {
    return new MarkupAutoChannelLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MarkupAutoChannelLines;

  requestBuilder(): MarkupAutoChannelLinesRequestBuilder<DeSerializersT> {
    return new MarkupAutoChannelLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MarkupAutoChannelLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MarkupAutoChannelLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MarkupAutoChannelLines<DeSerializersT>,
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
    typeof MarkupAutoChannelLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MarkupAutoChannelLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MarkupAutoChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_INTERNAL_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      MarkupAutoChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      MarkupAutoChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_CHANNEL_RELATION: OrderableEdmTypeField<
      MarkupAutoChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_1_PARTY_NUMBER: OrderableEdmTypeField<
      MarkupAutoChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MarkupAutoChannelLines<DeSerializers>>;
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
         * Static representation of the {@link omInternalOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_INTERNAL_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMInternalOrganization_PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omHierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'OMHierarchyType_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link retailChannelRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_RELATION: fieldBuilder.buildEdmTypeField(
          'RetailChannelRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnit1PartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_1_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnit1_PartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MarkupAutoChannelLines)
      };
    }

    return this._schema;
  }
}
