/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarrantyApplicableChannels } from './WarrantyApplicableChannels';
import { WarrantyApplicableChannelsRequestBuilder } from './WarrantyApplicableChannelsRequestBuilder';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';
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
export class WarrantyApplicableChannelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarrantyApplicableChannels<DeSerializersT>, DeSerializersT>
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
  ): WarrantyApplicableChannelsApi<DeSerializersT> {
    return new WarrantyApplicableChannelsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WarrantyApplicableChannels;

  requestBuilder(): WarrantyApplicableChannelsRequestBuilder<DeSerializersT> {
    return new WarrantyApplicableChannelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarrantyApplicableChannels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarrantyApplicableChannels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarrantyApplicableChannels<DeSerializersT>,
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
    typeof WarrantyApplicableChannels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarrantyApplicableChannels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WARRANTY_GROUP_NAME: OrderableEdmTypeField<
      WarrantyApplicableChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      WarrantyApplicableChannels<DeSerializers>,
      DeSerializersT,
      WarrantyGroupStatusType,
      true,
      true
    >;
    LINE_IDENTIFIER: OrderableEdmTypeField<
      WarrantyApplicableChannels<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHANNEL_NAME: OrderableEdmTypeField<
      WarrantyApplicableChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      WarrantyApplicableChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OM_HIERARCHY_TYPE: OrderableEdmTypeField<
      WarrantyApplicableChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WarrantyApplicableChannels<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link warrantyGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'WarrantyGroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          WarrantyGroupStatusType,
          true
        ),
        /**
         * Static representation of the {@link lineIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'LineIdentifier',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link channelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_NAME: fieldBuilder.buildEdmTypeField(
          'ChannelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link omHierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_HIERARCHY_TYPE: fieldBuilder.buildEdmTypeField(
          'OMHierarchyType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarrantyApplicableChannels)
      };
    }

    return this._schema;
  }
}
