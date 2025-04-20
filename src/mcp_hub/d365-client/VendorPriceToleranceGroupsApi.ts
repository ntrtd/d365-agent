/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPriceToleranceGroups } from './VendorPriceToleranceGroups';
import { VendorPriceToleranceGroupsRequestBuilder } from './VendorPriceToleranceGroupsRequestBuilder';
import { VendInvoicePriceTolerancesApi } from './VendInvoicePriceTolerancesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorPriceToleranceGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorPriceToleranceGroups<DeSerializersT>, DeSerializersT>
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
  ): VendorPriceToleranceGroupsApi<DeSerializersT> {
    return new VendorPriceToleranceGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoicePriceTolerance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_PRICE_TOLERANCE: OneToManyLink<
      VendorPriceToleranceGroups<DeSerializersT>,
      DeSerializersT,
      VendInvoicePriceTolerancesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendInvoicePriceTolerancesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VEND_INVOICE_PRICE_TOLERANCE: new OneToManyLink(
        'VendInvoicePriceTolerance',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VendorPriceToleranceGroups;

  requestBuilder(): VendorPriceToleranceGroupsRequestBuilder<DeSerializersT> {
    return new VendorPriceToleranceGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorPriceToleranceGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorPriceToleranceGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorPriceToleranceGroups<DeSerializersT>,
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
    typeof VendorPriceToleranceGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorPriceToleranceGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorPriceToleranceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      VendorPriceToleranceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendorPriceToleranceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoicePriceTolerance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_PRICE_TOLERANCE: OneToManyLink<
      VendorPriceToleranceGroups<DeSerializersT>,
      DeSerializersT,
      VendInvoicePriceTolerancesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorPriceToleranceGroups<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorPriceToleranceGroups)
      };
    }

    return this._schema;
  }
}
