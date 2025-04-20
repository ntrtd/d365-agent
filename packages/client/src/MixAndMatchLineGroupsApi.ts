/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MixAndMatchLineGroups } from './MixAndMatchLineGroups';
import { MixAndMatchLineGroupsRequestBuilder } from './MixAndMatchLineGroupsRequestBuilder';
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
export class MixAndMatchLineGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MixAndMatchLineGroups<DeSerializersT>, DeSerializersT>
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
  ): MixAndMatchLineGroupsApi<DeSerializersT> {
    return new MixAndMatchLineGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MixAndMatchLineGroups;

  requestBuilder(): MixAndMatchLineGroupsRequestBuilder<DeSerializersT> {
    return new MixAndMatchLineGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MixAndMatchLineGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MixAndMatchLineGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MixAndMatchLineGroups<DeSerializersT>,
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
    typeof MixAndMatchLineGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MixAndMatchLineGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MixAndMatchLineGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIX_AND_MATCH_OFFER_ID: OrderableEdmTypeField<
      MixAndMatchLineGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIX_AND_MATCH_LINE_GROUP: OrderableEdmTypeField<
      MixAndMatchLineGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCOUNT_LINE_COLOR: OrderableEdmTypeField<
      MixAndMatchLineGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NUMBER_OF_ITEMS_NEEDED: OrderableEdmTypeField<
      MixAndMatchLineGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<MixAndMatchLineGroups<DeSerializers>>;
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
         * Static representation of the {@link mixAndMatchOfferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_OFFER_ID: fieldBuilder.buildEdmTypeField(
          'MixAndMatchOfferId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mixAndMatchLineGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_LINE_GROUP: fieldBuilder.buildEdmTypeField(
          'MixAndMatchLineGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link discountLineColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_LINE_COLOR: fieldBuilder.buildEdmTypeField(
          'DiscountLineColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link numberOfItemsNeeded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ITEMS_NEEDED: fieldBuilder.buildEdmTypeField(
          'NumberOfItemsNeeded',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MixAndMatchLineGroups)
      };
    }

    return this._schema;
  }
}
