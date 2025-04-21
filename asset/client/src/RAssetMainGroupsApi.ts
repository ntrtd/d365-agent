/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetMainGroups } from './RAssetMainGroups';
import { RAssetMainGroupsRequestBuilder } from './RAssetMainGroupsRequestBuilder';
import { RAssetGroupTypes } from './RAssetGroupTypes';
import { NoYes } from './NoYes';
import { RAssetVatRefundingStartDate } from './RAssetVatRefundingStartDate';
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
export class RAssetMainGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetMainGroups<DeSerializersT>, DeSerializersT>
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
  ): RAssetMainGroupsApi<DeSerializersT> {
    return new RAssetMainGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RAssetMainGroups;

  requestBuilder(): RAssetMainGroupsRequestBuilder<DeSerializersT> {
    return new RAssetMainGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetMainGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RAssetMainGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RAssetMainGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RAssetMainGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RAssetMainGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FA_GROUP: OrderableEdmTypeField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_OF_GROUP: EnumField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      RAssetGroupTypes,
      true,
      true
    >;
    AUTONUMERATION_FA: EnumField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FA_AUTONUMBERING_SEQUENCE: OrderableEdmTypeField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODES_AUTONUMERATION: EnumField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_REFUNDING: EnumField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      RAssetVatRefundingStartDate,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_AUTONUMERATION_SEQUENCE: OrderableEdmTypeField<
      RAssetMainGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RAssetMainGroups<DeSerializers>>;
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
         * Static representation of the {@link faGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_GROUP: fieldBuilder.buildEdmTypeField(
          'FAGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link typeOfGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_GROUP: fieldBuilder.buildEnumField(
          'TypeOfGroup',
          RAssetGroupTypes,
          true
        ),
        /**
         * Static representation of the {@link autonumerationFa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTONUMERATION_FA: fieldBuilder.buildEnumField(
          'AutonumerationFA',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link faAutonumberingSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_AUTONUMBERING_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'FAAutonumberingSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodesAutonumeration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODES_AUTONUMERATION: fieldBuilder.buildEnumField(
          'BarcodesAutonumeration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vatRefunding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REFUNDING: fieldBuilder.buildEnumField(
          'VATRefunding',
          RAssetVatRefundingStartDate,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link barcodeAutonumerationSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_AUTONUMERATION_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'BarcodeAutonumerationSequence',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetMainGroups)
      };
    }

    return this._schema;
  }
}
