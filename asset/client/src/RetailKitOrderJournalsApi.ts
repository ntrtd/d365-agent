/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailKitOrderJournals } from './RetailKitOrderJournals';
import { RetailKitOrderJournalsRequestBuilder } from './RetailKitOrderJournalsRequestBuilder';
import { RetailKitOrdersApi } from './RetailKitOrdersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailKitOrderJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailKitOrderJournals<DeSerializersT>, DeSerializersT>
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
  ): RetailKitOrderJournalsApi<DeSerializersT> {
    return new RetailKitOrderJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailKitOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_ORDER: OneToOneLink<
      RetailKitOrderJournals<DeSerializersT>,
      DeSerializersT,
      RetailKitOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailKitOrdersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_KIT_ORDER: new OneToOneLink('RetailKitOrder', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailKitOrderJournals;

  requestBuilder(): RetailKitOrderJournalsRequestBuilder<DeSerializersT> {
    return new RetailKitOrderJournalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailKitOrderJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailKitOrderJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailKitOrderJournals<DeSerializersT>,
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
    typeof RetailKitOrderJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailKitOrderJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitOrderJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_CONFIG_ID: OrderableEdmTypeField<
      RetailKitOrderJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailKitOrderJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RetailKitOrderJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      RetailKitOrderJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KIT_ORDER: OrderableEdmTypeField<
      RetailKitOrderJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailKitOrderJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKitOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_ORDER: OneToOneLink<
      RetailKitOrderJournals<DeSerializersT>,
      DeSerializersT,
      RetailKitOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailKitOrderJournals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link kitProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kitConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'KitConfigId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link kitOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_ORDER: fieldBuilder.buildEdmTypeField(
          'KitOrder',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailKitOrderJournals)
      };
    }

    return this._schema;
  }
}
