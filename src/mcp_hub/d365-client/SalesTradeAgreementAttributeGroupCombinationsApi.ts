/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTradeAgreementAttributeGroupCombinations } from './SalesTradeAgreementAttributeGroupCombinations';
import { SalesTradeAgreementAttributeGroupCombinationsRequestBuilder } from './SalesTradeAgreementAttributeGroupCombinationsRequestBuilder';
import { GupOpenTradeAgreementJournalLinesApi } from './GupOpenTradeAgreementJournalLinesApi';
import { NoYes } from './NoYes';
import { GupGroupAll } from './GupGroupAll';
import { GupPriceComponentCodeMaintenanceMode } from './GupPriceComponentCodeMaintenanceMode';
import { GupPriceComponent } from './GupPriceComponent';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesTradeAgreementAttributeGroupCombinationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializersT>,
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
  ): SalesTradeAgreementAttributeGroupCombinationsApi<DeSerializersT> {
    return new SalesTradeAgreementAttributeGroupCombinationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link attrGroupCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTR_GROUP_COMBINATION: OneToManyLink<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializersT>,
      DeSerializersT,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [GupOpenTradeAgreementJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ATTR_GROUP_COMBINATION: new OneToManyLink(
        'AttrGroupCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SalesTradeAgreementAttributeGroupCombinations;

  requestBuilder(): SalesTradeAgreementAttributeGroupCombinationsRequestBuilder<DeSerializersT> {
    return new SalesTradeAgreementAttributeGroupCombinationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesTradeAgreementAttributeGroupCombinations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTradeAgreementAttributeGroupCombinations<DeSerializersT>,
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
    typeof SalesTradeAgreementAttributeGroupCombinations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTradeAgreementAttributeGroupCombinations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_COMBINATION_NAME: OrderableEdmTypeField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: EnumField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_GROUP_ALL: EnumField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_MODE: EnumField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      GupPriceComponentCodeMaintenanceMode,
      true,
      true
    >;
    LINE_PRICE_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_PRICE_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT: EnumField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      GupPriceComponent,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: EnumField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_GROUP_ALL: EnumField<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attrGroupCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTR_GROUP_COMBINATION: OneToManyLink<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializersT>,
      DeSerializersT,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SalesTradeAgreementAttributeGroupCombinations<DeSerializers>
    >;
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
         * Static representation of the {@link priceAttributeGroupCombinationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_COMBINATION_NAME: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroupCombinationName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link headerPriceAttributeGroupAllEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: fieldBuilder.buildEnumField(
          'HeaderPriceAttributeGroupAllEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link headerGroupAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_GROUP_ALL: fieldBuilder.buildEnumField(
          'HeaderGroupAll',
          GupGroupAll,
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
         * Static representation of the {@link maintenanceMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_MODE: fieldBuilder.buildEnumField(
          'MaintenanceMode',
          GupPriceComponentCodeMaintenanceMode,
          true
        ),
        /**
         * Static representation of the {@link linePriceAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRICE_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'LinePriceAttributeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerPriceAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRICE_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'HeaderPriceAttributeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT: fieldBuilder.buildEnumField(
          'PriceComponent',
          GupPriceComponent,
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link linePriceAttributeGroupAllEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: fieldBuilder.buildEnumField(
          'LinePriceAttributeGroupAllEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineGroupAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_GROUP_ALL: fieldBuilder.buildEnumField(
          'LineGroupAll',
          GupGroupAll,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SalesTradeAgreementAttributeGroupCombinations
        )
      };
    }

    return this._schema;
  }
}
