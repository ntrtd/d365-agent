/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWarrantyLines } from './AssetMaintenanceWarrantyLines';
import { AssetMaintenanceWarrantyLinesRequestBuilder } from './AssetMaintenanceWarrantyLinesRequestBuilder';
import { AssetMaintenanceWarrantiesApi } from './AssetMaintenanceWarrantiesApi';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
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
export class AssetMaintenanceWarrantyLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceWarrantyLines<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceWarrantyLinesApi<DeSerializersT> {
    return new AssetMaintenanceWarrantyLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWarranty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WARRANTY: OneToOneLink<
      AssetMaintenanceWarrantyLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceWarrantiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_WARRANTY: new OneToOneLink(
        'AssetMaintenanceWarranty',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWarrantyLines;

  requestBuilder(): AssetMaintenanceWarrantyLinesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWarrantyLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWarrantyLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWarrantyLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWarrantyLines<DeSerializersT>,
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
    typeof AssetMaintenanceWarrantyLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWarrantyLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWarrantyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_ID: OrderableEdmTypeField<
      AssetMaintenanceWarrantyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWarrantyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      AssetMaintenanceWarrantyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERVAL: OrderableEdmTypeField<
      AssetMaintenanceWarrantyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD: EnumField<
      AssetMaintenanceWarrantyLines<DeSerializers>,
      DeSerializersT,
      DayWeekMonthQuarterYear,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWarranty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WARRANTY: OneToOneLink<
      AssetMaintenanceWarrantyLines<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWarrantyLines<DeSerializers>>;
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
         * Static representation of the {@link warrantyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEdmTypeField(
          'Interval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEnumField(
          'Period',
          DayWeekMonthQuarterYear,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWarrantyLines)
      };
    }

    return this._schema;
  }
}
