/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KittingKitVersions } from './KittingKitVersions';
import { KittingKitVersionsRequestBuilder } from './KittingKitVersionsRequestBuilder';
import { Kitting_KitHeadersApi } from './Kitting_KitHeadersApi';
import { NoYes } from './NoYes';
import { KittingKitType } from './KittingKitType';
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
export class KittingKitVersionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KittingKitVersions<DeSerializersT>, DeSerializersT>
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
  ): KittingKitVersionsApi<DeSerializersT> {
    return new KittingKitVersionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link kittingKitHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_HEADER: OneToOneLink<
      KittingKitVersions<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [Kitting_KitHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      KITTING_KIT_HEADER: new OneToOneLink(
        'Kitting_KitHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = KittingKitVersions;

  requestBuilder(): KittingKitVersionsRequestBuilder<DeSerializersT> {
    return new KittingKitVersionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KittingKitVersions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KittingKitVersions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    KittingKitVersions<DeSerializersT>,
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
    typeof KittingKitVersions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KittingKitVersions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_ITEM_NUMBER: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_ID: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VERSION_NAME: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    KIT_TYPE: EnumField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      KittingKitType,
      true,
      true
    >;
    KIT_GROUP: OrderableEdmTypeField<
      KittingKitVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link kittingKitHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_HEADER: OneToOneLink<
      KittingKitVersions<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<KittingKitVersions<DeSerializers>>;
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
         * Static representation of the {@link kitItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_ID: fieldBuilder.buildEdmTypeField('KitId', 'Edm.String', false),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        /**
         * Static representation of the {@link versionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_NAME: fieldBuilder.buildEdmTypeField(
          'VersionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link kitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_TYPE: fieldBuilder.buildEnumField('KitType', KittingKitType, true),
        /**
         * Static representation of the {@link kitGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_GROUP: fieldBuilder.buildEdmTypeField(
          'KitGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KittingKitVersions)
      };
    }

    return this._schema;
  }
}
