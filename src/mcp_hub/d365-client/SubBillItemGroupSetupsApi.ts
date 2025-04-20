/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillItemGroupSetups } from './SubBillItemGroupSetups';
import { SubBillItemGroupSetupsRequestBuilder } from './SubBillItemGroupSetupsRequestBuilder';
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
export class SubBillItemGroupSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillItemGroupSetups<DeSerializersT>, DeSerializersT>
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
  ): SubBillItemGroupSetupsApi<DeSerializersT> {
    return new SubBillItemGroupSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillItemGroupSetups;

  requestBuilder(): SubBillItemGroupSetupsRequestBuilder<DeSerializersT> {
    return new SubBillItemGroupSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillItemGroupSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillItemGroupSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillItemGroupSetups<DeSerializersT>,
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
    typeof SubBillItemGroupSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillItemGroupSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillItemGroupSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_GROUP: OrderableEdmTypeField<
      SubBillItemGroupSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRORATE_SUPPORT_AND_RENEWAL: EnumField<
      SubBillItemGroupSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_TOP_LINES: OrderableEdmTypeField<
      SubBillItemGroupSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADJUST_RENEWAL_DATES: EnumField<
      SubBillItemGroupSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillItemGroupSetups<DeSerializers>>;
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
         * Static representation of the {@link itemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prorateSupportAndRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_SUPPORT_AND_RENEWAL: fieldBuilder.buildEnumField(
          'ProrateSupportAndRenewal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberOfTopLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_TOP_LINES: fieldBuilder.buildEdmTypeField(
          'NumberOfTopLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link adjustRenewalDates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUST_RENEWAL_DATES: fieldBuilder.buildEnumField(
          'AdjustRenewalDates',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillItemGroupSetups)
      };
    }

    return this._schema;
  }
}
