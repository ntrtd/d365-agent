/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransferPrices } from './TransferPrices';
import { TransferPricesRequestBuilder } from './TransferPricesRequestBuilder';
import { ProjectResourcesApi } from './ProjectResourcesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { ResourceCategoriesApi } from './ResourceCategoriesApi';
import { ProjTransferPriceTransType } from './ProjTransferPriceTransType';
import { ProjTransferPriceModel } from './ProjTransferPriceModel';
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
export class TransferPricesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransferPrices<DeSerializersT>, DeSerializersT>
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
  ): TransferPricesApi<DeSerializersT> {
    return new TransferPricesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: OneToOneLink<
      TransferPrices<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCIES: OneToOneLink<
      TransferPrices<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceRoles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_ROLES: OneToOneLink<
      TransferPrices<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjectResourcesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      ResourceCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RESOURCES: new OneToOneLink('Resources', this, linkedApis[0]),
      CURRENCIES: new OneToOneLink('Currencies', this, linkedApis[1]),
      RESOURCE_ROLES: new OneToOneLink('ResourceRoles', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = TransferPrices;

  requestBuilder(): TransferPricesRequestBuilder<DeSerializersT> {
    return new TransferPricesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransferPrices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TransferPrices<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TransferPrices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TransferPrices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TransferPrices, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BORROWING_LEGAL_ENTITY: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_CURRENCY: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      ProjTransferPriceTransType,
      true,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE_ID: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_PRICE_MODEL: EnumField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      ProjTransferPriceModel,
      true,
      true
    >;
    PRICING: OrderableEdmTypeField<
      TransferPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: OneToOneLink<
      TransferPrices<DeSerializersT>,
      DeSerializersT,
      ProjectResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCIES: OneToOneLink<
      TransferPrices<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceRoles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_ROLES: OneToOneLink<
      TransferPrices<DeSerializersT>,
      DeSerializersT,
      ResourceCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransferPrices<DeSerializers>>;
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
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link borrowingLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BORROWING_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'BorrowingLegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalesCurrency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          ProjTransferPriceTransType,
          true
        ),
        /**
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_ID: fieldBuilder.buildEdmTypeField('RoleId', 'Edm.String', false),
        /**
         * Static representation of the {@link transferPriceModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_PRICE_MODEL: fieldBuilder.buildEnumField(
          'TransferPriceModel',
          ProjTransferPriceModel,
          true
        ),
        /**
         * Static representation of the {@link pricing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING: fieldBuilder.buildEdmTypeField(
          'Pricing',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransferPrices)
      };
    }

    return this._schema;
  }
}
