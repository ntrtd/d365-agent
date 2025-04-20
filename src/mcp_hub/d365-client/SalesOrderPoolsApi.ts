/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderPools } from './SalesOrderPools';
import { SalesOrderPoolsRequestBuilder } from './SalesOrderPoolsRequestBuilder';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
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
export class SalesOrderPoolsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderPools<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderPoolsApi<DeSerializersT> {
    return new SalesOrderPoolsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      SalesOrderPools<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      SalesOrderPools<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesAgreementConfirmationsApi<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'SalesAgreementConfirmationHeaders',
        this,
        linkedApis[0]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SalesOrderPools;

  requestBuilder(): SalesOrderPoolsRequestBuilder<DeSerializersT> {
    return new SalesOrderPoolsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderPools<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderPools<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesOrderPools<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesOrderPools, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderPools,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesOrderPools<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POOL_ID: OrderableEdmTypeField<
      SalesOrderPools<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POOL_NAME: OrderableEdmTypeField<
      SalesOrderPools<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      SalesOrderPools<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      SalesOrderPools<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderPools<DeSerializers>>;
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
         * Static representation of the {@link poolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POOL_ID: fieldBuilder.buildEdmTypeField('PoolId', 'Edm.String', false),
        /**
         * Static representation of the {@link poolName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POOL_NAME: fieldBuilder.buildEdmTypeField(
          'PoolName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderPools)
      };
    }

    return this._schema;
  }
}
