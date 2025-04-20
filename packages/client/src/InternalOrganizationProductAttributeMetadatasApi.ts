/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InternalOrganizationProductAttributeMetadatas } from './InternalOrganizationProductAttributeMetadatas';
import { InternalOrganizationProductAttributeMetadatasRequestBuilder } from './InternalOrganizationProductAttributeMetadatasRequestBuilder';
import { RetailProductAttributeRelationType } from './RetailProductAttributeRelationType';
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
export class InternalOrganizationProductAttributeMetadatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InternalOrganizationProductAttributeMetadatas<DeSerializersT>,
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
  ): InternalOrganizationProductAttributeMetadatasApi<DeSerializersT> {
    return new InternalOrganizationProductAttributeMetadatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InternalOrganizationProductAttributeMetadatas;

  requestBuilder(): InternalOrganizationProductAttributeMetadatasRequestBuilder<DeSerializersT> {
    return new InternalOrganizationProductAttributeMetadatasRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InternalOrganizationProductAttributeMetadatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InternalOrganizationProductAttributeMetadatas<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InternalOrganizationProductAttributeMetadatas<DeSerializersT>,
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
    typeof InternalOrganizationProductAttributeMetadatas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InternalOrganizationProductAttributeMetadatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    XML_METADATA: OrderableEdmTypeField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    XML_METADATA_VERSION_NUMBER: OrderableEdmTypeField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATTRIBUTE_RELATION_TYPE: EnumField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      RetailProductAttributeRelationType,
      true,
      true
    >;
    KEY_NAME: OrderableEdmTypeField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REQUIRED: EnumField<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      InternalOrganizationProductAttributeMetadatas<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link xmlMetadata} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        XML_METADATA: fieldBuilder.buildEdmTypeField(
          'XmlMetadata',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link xmlMetadataVersionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        XML_METADATA_VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'XmlMetadataVersionNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link attributeRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_RELATION_TYPE: fieldBuilder.buildEnumField(
          'AttributeRelationType',
          RetailProductAttributeRelationType,
          true
        ),
        /**
         * Static representation of the {@link keyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_NAME: fieldBuilder.buildEdmTypeField('KeyName', 'Edm.String', true),
        /**
         * Static representation of the {@link isRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REQUIRED: fieldBuilder.buildEnumField('IsRequired', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          InternalOrganizationProductAttributeMetadatas
        )
      };
    }

    return this._schema;
  }
}
