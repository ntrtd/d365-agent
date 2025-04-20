/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailAssortmentChannelLines } from './RetailAssortmentChannelLines';
import { RetailAssortmentChannelLinesRequestBuilder } from './RetailAssortmentChannelLinesRequestBuilder';
import { RetailAssortmentsApi } from './RetailAssortmentsApi';
import { RetailAssortmentStatusType } from './RetailAssortmentStatusType';
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
export class RetailAssortmentChannelLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailAssortmentChannelLines<DeSerializersT>, DeSerializersT>
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
  ): RetailAssortmentChannelLinesApi<DeSerializersT> {
    return new RetailAssortmentChannelLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailAssortment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ASSORTMENT: OneToOneLink<
      RetailAssortmentChannelLines<DeSerializersT>,
      DeSerializersT,
      RetailAssortmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailAssortmentsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_ASSORTMENT: new OneToOneLink(
        'RetailAssortment',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailAssortmentChannelLines;

  requestBuilder(): RetailAssortmentChannelLinesRequestBuilder<DeSerializersT> {
    return new RetailAssortmentChannelLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailAssortmentChannelLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailAssortmentChannelLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailAssortmentChannelLines<DeSerializersT>,
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
    typeof RetailAssortmentChannelLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailAssortmentChannelLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ASSORTMENT_ID: OrderableEdmTypeField<
      RetailAssortmentChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      RetailAssortmentChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_HIERARCHY_TYPE: OrderableEdmTypeField<
      RetailAssortmentChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      RetailAssortmentChannelLines<DeSerializers>,
      DeSerializersT,
      RetailAssortmentStatusType,
      true,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      RetailAssortmentChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailAssortment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ASSORTMENT: OneToOneLink<
      RetailAssortmentChannelLines<DeSerializersT>,
      DeSerializersT,
      RetailAssortmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailAssortmentChannelLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link assortmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSORTMENT_ID: fieldBuilder.buildEdmTypeField(
          'AssortmentId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link organizationHierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_HIERARCHY_TYPE: fieldBuilder.buildEdmTypeField(
          'OrganizationHierarchyType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailAssortmentStatusType,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailAssortmentChannelLines)
      };
    }

    return this._schema;
  }
}
