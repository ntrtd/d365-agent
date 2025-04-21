/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillOfMaterialsVersionsODataV2 } from './BillOfMaterialsVersionsODataV2';
import { BillOfMaterialsVersionsODataV2RequestBuilder } from './BillOfMaterialsVersionsODataV2RequestBuilder';
import { WorkersApi } from './WorkersApi';
import { BillOfMaterialsHeadersApi } from './BillOfMaterialsHeadersApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BillOfMaterialsVersionsODataV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BillOfMaterialsVersionsODataV2<DeSerializersT>, DeSerializersT>
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
  ): BillOfMaterialsVersionsODataV2Api<DeSerializersT> {
    return new BillOfMaterialsVersionsODataV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link approvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVING_WORKER: OneToOneLink<
      BillOfMaterialsVersionsODataV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      BillOfMaterialsVersionsODataV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      BillOfMaterialsHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      APPROVING_WORKER: new OneToOneLink(
        'ApprovingWorker',
        this,
        linkedApis[0]
      ),
      BILL_OF_MATERIALS_HEADER: new OneToOneLink(
        'BillOfMaterialsHeader',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BillOfMaterialsVersionsODataV2;

  requestBuilder(): BillOfMaterialsVersionsODataV2RequestBuilder<DeSerializersT> {
    return new BillOfMaterialsVersionsODataV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BillOfMaterialsVersionsODataV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BillOfMaterialsVersionsODataV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillOfMaterialsVersionsODataV2<DeSerializersT>,
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
    typeof BillOfMaterialsVersionsODataV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillOfMaterialsVersionsODataV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURED_ITEM_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_QUANTITY: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATCH_WEIGHT_SIZE: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SELECTED_FOR_DESIGNER: EnumField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FROM_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROVER_ID: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VERSION_NAME: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      BillOfMaterialsVersionsODataV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVING_WORKER: OneToOneLink<
      BillOfMaterialsVersionsODataV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      BillOfMaterialsVersionsODataV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BillOfMaterialsVersionsODataV2<DeSerializers>>;
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
         * Static representation of the {@link manufacturedItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURED_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManufacturedItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ID: fieldBuilder.buildEdmTypeField('BOMId', 'Edm.String', false),
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEdmTypeField(
          'IsActive',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link fromQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link catchWeightSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_SIZE: fieldBuilder.buildEdmTypeField(
          'CatchWeightSize',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSelectedForDesigner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SELECTED_FOR_DESIGNER: fieldBuilder.buildEnumField(
          'IsSelectedForDesigner',
          NoYes,
          true
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
         * Static representation of the {@link fromCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link approverId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_ID: fieldBuilder.buildEdmTypeField(
          'ApproverId',
          'Edm.Int64',
          false
        ),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BillOfMaterialsVersionsODataV2)
      };
    }

    return this._schema;
  }
}
