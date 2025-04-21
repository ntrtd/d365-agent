/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdReportSetups } from './WithholdReportSetups';
import { WithholdReportSetupsRequestBuilder } from './WithholdReportSetupsRequestBuilder';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { TaxWithholdReportLayoutTh } from './TaxWithholdReportLayoutTh';
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
export class WithholdReportSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdReportSetups<DeSerializersT>, DeSerializersT>
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
  ): WithholdReportSetupsApi<DeSerializersT> {
    return new WithholdReportSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdReportSetups;

  requestBuilder(): WithholdReportSetupsRequestBuilder<DeSerializersT> {
    return new WithholdReportSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdReportSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdReportSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdReportSetups<DeSerializersT>,
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
    typeof WithholdReportSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdReportSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_WITHHOLD_VENDOR_TYPE_TH: EnumField<
      WithholdReportSetups<DeSerializers>,
      DeSerializersT,
      TaxWithholdVendorTypeTh,
      true,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      WithholdReportSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_WITHHOLD_REPORT_LAYOUT_TH: EnumField<
      WithholdReportSetups<DeSerializers>,
      DeSerializersT,
      TaxWithholdReportLayoutTh,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdReportSetups<DeSerializers>>;
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
         * Static representation of the {@link taxWithholdVendorTypeTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_VENDOR_TYPE_TH: fieldBuilder.buildEnumField(
          'TaxWithholdVendorType_TH',
          TaxWithholdVendorTypeTh,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdItemGroupHeadingTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroupHeading_TH',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdReportLayoutTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_REPORT_LAYOUT_TH: fieldBuilder.buildEnumField(
          'TaxWithholdReportLayout_TH',
          TaxWithholdReportLayoutTh,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdReportSetups)
      };
    }

    return this._schema;
  }
}
