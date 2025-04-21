/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeliveryChargeGroup } from './DeliveryChargeGroup';
import { DeliveryChargeGroupRequestBuilder } from './DeliveryChargeGroupRequestBuilder';
import { SalesAutomaticSalesDocumentHeaderTaxChargesApi } from './SalesAutomaticSalesDocumentHeaderTaxChargesApi';
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
export class DeliveryChargeGroupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeliveryChargeGroup<DeSerializersT>, DeSerializersT>
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
  ): DeliveryChargeGroupApi<DeSerializersT> {
    return new DeliveryChargeGroupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesChargeDeliveryGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_DELIVERY_GROUPS: OneToManyLink<
      DeliveryChargeGroup<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SALES_CHARGE_DELIVERY_GROUPS: new OneToManyLink(
        'SalesChargeDeliveryGroups',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DeliveryChargeGroup;

  requestBuilder(): DeliveryChargeGroupRequestBuilder<DeSerializersT> {
    return new DeliveryChargeGroupRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeliveryChargeGroup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DeliveryChargeGroup<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DeliveryChargeGroup<DeSerializersT>,
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
    typeof DeliveryChargeGroup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeliveryChargeGroup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DeliveryChargeGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      DeliveryChargeGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_DESCRIPTION: OrderableEdmTypeField<
      DeliveryChargeGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesChargeDeliveryGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_DELIVERY_GROUPS: OneToManyLink<
      DeliveryChargeGroup<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeliveryChargeGroup<DeSerializers>>;
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
         * Static representation of the {@link groupDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GroupDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeliveryChargeGroup)
      };
    }

    return this._schema;
  }
}
