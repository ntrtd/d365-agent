/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTableBrBiEntities } from './SalesTableBrBiEntities';
import { SalesTableBrBiEntitiesRequestBuilder } from './SalesTableBrBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
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
export class SalesTableBrBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTableBrBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SalesTableBrBiEntitiesApi<DeSerializersT> {
    return new SalesTableBrBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesTableBrBiEntities;

  requestBuilder(): SalesTableBrBiEntitiesRequestBuilder<DeSerializersT> {
    return new SalesTableBrBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTableBrBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesTableBrBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTableBrBiEntities<DeSerializersT>,
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
    typeof SalesTableBrBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTableBrBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    THIRD_PARTY_SALES_DIGITAL_PLATFORM: EnumField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_CODE_ON_DLV_ADDRESS_BR: EnumField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THIRD_PARTY_SALES_DIGITAL_PLATFORM_CNPJ: OrderableEdmTypeField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_CODE_BR: OrderableEdmTypeField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_CODE_BR: OrderableEdmTypeField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFPS_ID_BR: OrderableEdmTypeField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRESENCE_TYPE: EnumField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    CUST_FINAL_USER_BR: EnumField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_SERVICE_CODE_BR: OrderableEdmTypeField<
      SalesTableBrBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesTableBrBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link thirdPartySalesDigitalPlatform} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_SALES_DIGITAL_PLATFORM: fieldBuilder.buildEnumField(
          'ThirdPartySalesDigitalPlatform',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceCodeOnDlvAddressBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_ON_DLV_ADDRESS_BR: fieldBuilder.buildEnumField(
          'ServiceCodeOnDlvAddress_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link thirdPartySalesDigitalPlatformCnpj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_SALES_DIGITAL_PLATFORM_CNPJ: fieldBuilder.buildEdmTypeField(
          'ThirdPartySalesDigitalPlatformCNPJ',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE_BR: fieldBuilder.buildEdmTypeField(
          'InterestCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fineCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'FineCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfpsIdBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFPS_ID_BR: fieldBuilder.buildEdmTypeField(
          'CFPSId_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link presenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'PresenceType',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link custFinalUserBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_FINAL_USER_BR: fieldBuilder.buildEnumField(
          'CustFinalUser_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxServiceCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SERVICE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'TaxServiceCode_BR',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTableBrBiEntities)
      };
    }

    return this._schema;
  }
}
